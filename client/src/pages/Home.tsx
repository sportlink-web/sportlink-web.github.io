import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MapPin, 
  Users, 
  Calendar, 
  Shield, 
  Zap, 
  Database,
  Code,
  CheckCircle2,
  TrendingUp,
  Eye,
  Github,
  Download
} from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const screenshots = [
    { src: "/screenshots/splashscreen.PNG", title: "Splash Screen" },
    { src: "/screenshots/auth-signin.PNG", title: "Sign In" },
    { src: "/screenshots/auth-signup.PNG", title: "Sign Up" },
    { src: "/screenshots/home.PNG", title: "Home" },
    { src: "/screenshots/my-progress.PNG", title: "Personal Progress" },
    { src: "/screenshots/discover-list.PNG", title: "Discover List" },
    { src: "/screenshots/discover-map.PNG", title: "Discover Map" },
    { src: "/screenshots/activity-details.PNG", title: "Activity Details" },
    { src: "/screenshots/activity-details-2.PNG", title: "Activity Details 2" },
    { src: "/screenshots/create-activity.PNG", title: "Create Activity" },
    { src: "/screenshots/bookings.PNG", title: "Bookings" },
    { src: "/screenshots/profile.PNG", title: "Profile" },
    { src: "/screenshots/edit-profile.PNG", title: "Edit Profile" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/screenshots/sportlink-icon.png"
                alt="SportLink logo"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="text-xl font-bold">SportLink</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#technology" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
              <a href="#screenshots" className="text-sm font-medium hover:text-primary transition-colors">Screenshots</a>
              <a href="#testing" className="text-sm font-medium hover:text-primary transition-colors">Testing</a>
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent via-background to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2" variant="secondary">
              Native iOS App • Swift & SwiftUI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Connect Through Sports
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SportLink helps people organize, discover, and join local sports sessions. From discovery to booking, every step is designed for a fast and intuitive mobile experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" disabled>
                <Calendar className="w-5 h-5 mr-2" />
                iOS Release In Progress
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS 17+</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Real-time Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Firebase Backend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Core product capabilities for creating activities, finding nearby sessions, and managing participation in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Complete Authentication</CardTitle>
                <CardDescription>
                  Secure sign-in and registration with Firebase Authentication, including profile setup, sports preferences, and availability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>User Profiles</CardTitle>
                <CardDescription>
                  Personalized profiles with sports interests, schedule preferences, and editable account information.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Interactive Maps</CardTitle>
                <CardDescription>
                  Explore venues and activities with map markers, filters, and zoom-aware discovery powered by Apple MapKit.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Search & Filter Activities</CardTitle>
                <CardDescription>
                  Switch between map and list views, then refine results by date, distance, and sport type.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Create & Manage Activities</CardTitle>
                <CardDescription>
                  Create complete events with schedule, location, participant limits, and details, then update or manage them later.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>
                  Activity and participation changes sync instantly with Firestore to keep everyone on the same page.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  The home experience surfaces relevant activity suggestions based on your profile and engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Accessibility Support</CardTitle>
                <CardDescription>
                  Accessibility-first interactions, including VoiceOver-friendly labels and predictable navigation patterns.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Native iOS architecture backed by Firebase services for reliability, speed, and maintainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Code className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">Native iOS Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Swift & SwiftUI</p>
                    <p className="text-sm text-muted-foreground">Modern declarative UI framework for fluid, native interfaces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Xcode IDE</p>
                    <p className="text-sm text-muted-foreground">Real-time simulation and debugging capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">iOS 17+ Target</p>
                    <p className="text-sm text-muted-foreground">Simplified testing and access to latest platform features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Native Components</p>
                    <p className="text-sm text-muted-foreground">Location services, notifications, and calendar integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">Cloud Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Authentication</p>
                    <p className="text-sm text-muted-foreground">Secure user authentication and session management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cloud Firestore</p>
                    <p className="text-sm text-muted-foreground">NoSQL database with real-time synchronization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Storage</p>
                    <p className="text-sm text-muted-foreground">Scalable cloud storage for profile images and media</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Apple MapKit</p>
                    <p className="text-sm text-muted-foreground">Native map integration with sports facility data and location services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Architecture Overview</CardTitle>
                <CardDescription>
                  Clean, modular architecture following iOS best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">AppEntry</p>
                    <p className="text-sm text-muted-foreground">Application initialization</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Authentication</p>
                    <p className="text-sm text-muted-foreground">Login & registration flows</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Core</p>
                    <p className="text-sm text-muted-foreground">Models, services & extensions</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Navigation</p>
                    <p className="text-sm text-muted-foreground">Home, Discover, Create, Bookings</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Resources</p>
                    <p className="text-sm text-muted-foreground">Assets & configuration</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Shared</p>
                    <p className="text-sm text-muted-foreground">Reusable components</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">App Screenshots</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A visual walkthrough of the key user journeys across onboarding, discovery, booking, and profile management.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg mb-8">
              <div className="relative w-full bg-muted/50 flex items-center justify-center" style={{ height: "650px" }}>
                <img
                  src={screenshots[selectedScreenshot].src}
                  alt={screenshots[selectedScreenshot].title}
                  className="w-auto h-full object-contain px-4 py-8"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {screenshots.map((screenshot, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedScreenshot(index)}
                  variant={selectedScreenshot === index ? "default" : "outline"}
                  className="text-sm px-4 py-2 transition-all duration-200"
                >
                  {screenshot.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Performance Section */}
      <section id="testing" className="py-20 bg-accent/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality & Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Testing and optimization workflows focused on stability, responsiveness, and day-to-day reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unit & Functional Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  XCTest coverage across models, ViewModels, and key user flows to reduce regressions as features evolve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Iterative profiling to improve CPU and memory behavior during map rendering, navigation, and list interactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usability Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Structured validation with real users and practical scenarios to refine UX decisions before release.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/screenshots/sportlink-icon.png"
                alt="SportLink logo"
                className="w-8 h-8 rounded-sm object-cover"
              />
              <span className="font-semibold text-lg">SportLink</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              A native iOS app for discovering and organizing local sports activities
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 SportLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
