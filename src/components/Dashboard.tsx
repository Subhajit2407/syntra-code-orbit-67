
import { Kanban, List, Timeline, Video, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Project Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your student community projects with powerful tools and insights
          </p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="kanban" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="kanban" className="flex items-center gap-2">
                <Kanban className="w-4 h-4" />
                Kanban
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List className="w-4 h-4" />
                Task List
              </TabsTrigger>
              <TabsTrigger value="timeline" className="flex items-center gap-2">
                <Timeline className="w-4 h-4" />
                Timeline
              </TabsTrigger>
            </TabsList>

            <TabsContent value="kanban" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-700">To Do</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-900">Setup Project Repository</h4>
                      <p className="text-sm text-gray-600 mt-1">Initialize Git repository and project structure</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">High Priority</span>
                        <span className="text-xs text-gray-500">Due: Sep 15, 2024</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-900">Team Formation</h4>
                      <p className="text-sm text-gray-600 mt-1">Recruit team members and assign roles</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
                        <span className="text-xs text-gray-500">Due: Sep 20, 2024</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-orange-700">In Progress</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-medium text-gray-900">Frontend Development</h4>
                      <p className="text-sm text-gray-600 mt-1">Building user interface components</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">In Progress</span>
                        <span className="text-xs text-gray-500">Due: Oct 1, 2024</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-green-700">Completed</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm opacity-75">
                      <h4 className="font-medium text-gray-900">Project Planning</h4>
                      <p className="text-sm text-gray-600 mt-1">Defined project scope and requirements</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                        <span className="text-xs text-gray-500">Completed: Sep 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="list" className="mt-8">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Database Schema Design</h4>
                        <p className="text-sm text-gray-600">Create database tables and relationships</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">High</span>
                      <span className="text-xs text-gray-500">Sep 25, 2024</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900 line-through">API Documentation</h4>
                        <p className="text-sm text-gray-600">Document all API endpoints</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Done</span>
                      <span className="text-xs text-gray-500">Sep 12, 2024</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="mt-8">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Project Kickoff</h4>
                        <span className="text-sm text-gray-500">Sep 5, 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Team assembled and project goals defined</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">Development Phase</h4>
                        <span className="text-sm text-gray-500">Sep 15 - Oct 15, 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Core features implementation and testing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-500">Final Presentation</h4>
                        <span className="text-sm text-gray-500">Oct 20, 2024</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Present project to stakeholders</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">12</h3>
            <p className="text-gray-600">Active Projects</p>
          </Card>
          <Card className="p-6 text-center">
            <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">89</h3>
            <p className="text-gray-600">Team Messages</p>
          </Card>
          <Card className="p-6 text-center">
            <Timeline className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">24</h3>
            <p className="text-gray-600">Completed Tasks</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
