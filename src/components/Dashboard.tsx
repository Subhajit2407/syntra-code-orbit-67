
import { Kanban, List, Calendar, Video, MessageSquare, Search, Bell, Settings, Plus, Filter, MoreHorizontal, Users, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900">Syntra</span>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
                <Kanban className="w-5 h-5" />
                <span className="font-medium">Projects</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <List className="w-5 h-5" />
                <span>Tasks</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5" />
                <span>Calendar</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Team</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <MessageSquare className="w-5 h-5" />
                <span>Messages</span>
              </a>
            </nav>
            
            <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Upgrade Plan</h4>
              <p className="text-sm text-gray-600 mb-3">Get access to premium features</p>
              <Button size="sm" className="w-full">Upgrade Now</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search projects..." 
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Projects</p>
                    <p className="text-3xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Kanban className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+2 from last month</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                    <p className="text-3xl font-bold text-gray-900">89</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+12% from last week</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-3xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-2">3 new this week</p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Hours Logged</p>
                    <p className="text-3xl font-bold text-gray-900">156</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-sm text-orange-600 mt-2">8h today</p>
              </Card>
            </div>

            {/* Project Management Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Projects */}
              <div className="lg:col-span-2">
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Filter className="w-4 h-4" />
                          Filter
                        </Button>
                        <Button size="sm">
                          <Plus className="w-4 h-4" />
                          New Project
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Project</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-semibold text-sm">M</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Mobile App Redesign</p>
                                <p className="text-sm text-gray-500">UI/UX Project</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800">In Progress</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 rounded-full">
                                <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                              </div>
                              <span className="text-sm text-gray-600">75%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">Oct 15, 2024</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-semibold text-sm">W</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Website Optimization</p>
                                <p className="text-sm text-gray-500">Performance</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 rounded-full">
                                <div className="w-full h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-sm text-gray-600">100%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">Sep 30, 2024</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-semibold text-sm">A</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">API Development</p>
                                <p className="text-sm text-gray-500">Backend</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-gray-600">Planning</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-white"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-gray-600 text-xs">+2</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 rounded-full">
                                <div className="w-1/4 h-2 bg-purple-500 rounded-full"></div>
                              </div>
                              <span className="text-sm text-gray-600">25%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">Nov 1, 2024</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>

              {/* Activity Feed */}
              <div>
                <Card>
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Task completed in <span className="font-medium">Mobile App</span></p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">New team member joined <span className="font-medium">API Project</span></p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">New comment on <span className="font-medium">Website Optimization</span></p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">Deadline approaching for <span className="font-medium">Mobile App</span></p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
