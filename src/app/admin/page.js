'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Clock, Eye, FileText, Mail, Phone, MapPin, DollarSign, RefreshCw, LogOut } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState({});
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('adminAuth');
        
        if (!token) {
          router.push('/admin/login');
          return;
        }

        const response = await fetch('/api/admin/check');
        const data = await response.json();
        
        if (!data.authenticated) {
          localStorage.removeItem('adminAuth');
          router.push('/admin/login');
        } else {
          setCheckingAuth(false);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      localStorage.removeItem('adminAuth');
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  // Fetch applications
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/applications/list');
      const data = await response.json();
      
      if (data.success) {
        setApplications(data.applications);
        
        // Calculate stats
        const newStats = {
          total: data.applications.length,
          pending: data.applications.filter(app => app.verificationStatus === 'pending').length,
          approved: data.applications.filter(app => app.verificationStatus === 'approved').length,
          rejected: data.applications.filter(app => app.verificationStatus === 'rejected').length,
        };
        setStats(newStats);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to load applications');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!checkingAuth) {
      fetchApplications();
    }
  }, [checkingAuth]);

  // Update application status
  const updateStatus = async (applicationId, status) => {
    setUpdating(prev => ({ ...prev, [applicationId]: true }));
    
    try {
      const response = await fetch('/api/applications/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationId,
          status,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Refresh applications
        await fetchApplications();
        alert(`Application ${status}!`);
      } else {
        alert('Failed to update status: ' + result.message);
      }
    } catch (err) {
      alert('Error updating status');
      console.error(err);
    } finally {
      setUpdating(prev => ({ ...prev, [applicationId]: false }));
    }
  };

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">{checkingAuth ? 'Checking authentication...' : 'Loading applications...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl">Admin Dashboard</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchApplications}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Applications Management</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800"><strong>Error:</strong> {error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
              </div>
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Review</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{stats.pending}</p>
              </div>
              <Clock className="w-12 h-12 text-orange-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Approved</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.approved}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Rejected</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{stats.rejected}</p>
              </div>
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Applications</h2>
          </div>

          <div className="divide-y">
            {applications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No applications yet
              </div>
            ) : (
              applications.map((app) => (
                <div key={app._id} className="p-6 hover:bg-gray-50">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {app.organisationName}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          app.verificationStatus === 'pending' ? 'bg-orange-100 text-orange-800' :
                          app.verificationStatus === 'approved' ? 'bg-green-100 text-green-800' :
                          app.verificationStatus === 'rejected' ? 'bg-red-100 text-red-800' :
                          app.verificationStatus === 'under_review' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {app.verificationStatus.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                          {app.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Submitted: {new Date(app.submittedDate).toLocaleString('en-MY', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">RM {app.amountNeeded}</p>
                      <p className="text-sm text-gray-500">{app.assistanceType}</p>
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{app.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{app.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{app.city}, {app.state}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Description:</p>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </div>

                  {/* Reason for Help */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Reason:</p>
                    <p className="text-sm text-gray-600">{app.reasonForHelp}</p>
                  </div>

                  {/* Bank Details */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Bank Details:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Bank:</span>
                        <span className="text-gray-700 ml-2 font-medium">{app.bankName}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Account:</span>
                        <span className="text-gray-700 ml-2 font-medium">{app.accountNumber}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Name:</span>
                        <span className="text-gray-700 ml-2 font-medium">{app.accountName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Documents */}
                  {app.documents && app.documents.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Uploaded Documents ({app.documents.length}):
                      </p>
                      <div className="space-y-2">
                        {app.documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white rounded p-3">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{doc.originalName}</p>
                                <p className="text-xs text-gray-500">
                                  {doc.size ? `${(doc.size / 1024).toFixed(2)} KB` : 'Unknown size'} • 
                                  Uploaded: {new Date(doc.uploadDate).toLocaleDateString('en-MY')}
                                </p>
                              </div>
                            </div>
                            <a
                              href={doc.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                              View
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applicant Details */}
                  <details className="text-sm mb-4">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                      View Full Details
                    </summary>
                    <div className="mt-3 space-y-2 pl-4 border-l-2 border-blue-200">
                      <p><strong>Contact Person:</strong> {app.contactPerson}</p>
                      <p><strong>IC Number:</strong> {app.icNumber}</p>
                      {app.registrationNumber && (
                        <p><strong>Registration Number:</strong> {app.registrationNumber}</p>
                      )}
                      <p><strong>Full Address:</strong> {app.address}, {app.postcode} {app.city}, {app.state}</p>
                      {app.alternatePhone && (
                        <p><strong>Alternate Phone:</strong> {app.alternatePhone}</p>
                      )}
                    </div>
                  </details>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <button
                      onClick={() => updateStatus(app._id, 'approved')}
                      disabled={updating[app._id]}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {updating[app._id] ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(app._id, 'rejected')}
                      disabled={updating[app._id]}
                      className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {updating[app._id] ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                      Reject
                    </button>
                    <button
                      onClick={() => updateStatus(app._id, 'under_review')}
                      disabled={updating[app._id]}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      {updating[app._id] ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      Under Review
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}