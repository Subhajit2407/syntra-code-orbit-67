
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";

const Status = () => {
  const services = [
    { name: "API Services", status: "operational", uptime: "99.9%" },
    { name: "Code Runners", status: "operational", uptime: "99.8%" },
    { name: "Discussion Forums", status: "operational", uptime: "99.9%" },
    { name: "Analytics Dashboard", status: "degraded", uptime: "98.5%" },
    { name: "Event Scheduler", status: "operational", uptime: "99.7%" },
    { name: "File Storage", status: "operational", uptime: "99.9%" }
  ];

  const incidents = [
    {
      title: "Analytics Dashboard Performance Issues",
      status: "investigating",
      time: "2 hours ago",
      description: "We're currently investigating slow loading times for the analytics dashboard."
    },
    {
      title: "Scheduled Maintenance Complete",
      status: "resolved",
      time: "1 day ago",
      description: "Scheduled maintenance on our code runner infrastructure has been completed successfully."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "investigating":
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>;
      case "down":
        return <Badge className="bg-red-100 text-red-800">Down</Badge>;
      case "investigating":
        return <Badge className="bg-blue-100 text-blue-800">Investigating</Badge>;
      case "resolved":
        return <Badge className="bg-gray-100 text-gray-800">Resolved</Badge>;
      default:
        return <Badge className="bg-green-100 text-green-800">Operational</Badge>;
    }
  };

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            System
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Status</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time status updates for all Syntra services and infrastructure.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All systems operational</h2>
              <p className="text-gray-600">All services are running normally with minimal disruptions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Incidents</h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{incident.title}</h3>
                    {getStatusBadge(incident.status)}
                  </div>
                  <p className="text-gray-600 mb-2">{incident.description}</p>
                  <p className="text-sm text-gray-500">{incident.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Status;
