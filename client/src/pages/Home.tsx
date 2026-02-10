import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useTheme } from "@/contexts/ThemeContext";
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
  Moon,
  Sun
} from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme, switchable } = useTheme();
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const screenshots = [
    { src: "/screenshots/splashscreen.PNG", title: { en: "Splash Screen", fr: "Ecran de demarrage" } },
    { src: "/screenshots/auth-signin.PNG", title: { en: "Sign In", fr: "Connexion" } },
    { src: "/screenshots/auth-signup.PNG", title: { en: "Sign Up", fr: "Inscription" } },
    { src: "/screenshots/home.PNG", title: { en: "Home", fr: "Accueil" } },
    { src: "/screenshots/my-progress.PNG", title: { en: "Personal Progress", fr: "Progression" } },
    { src: "/screenshots/discover-list.PNG", title: { en: "Discover List", fr: "Liste Decouvrir" } },
    { src: "/screenshots/discover-map.PNG", title: { en: "Discover Map", fr: "Carte Decouvrir" } },
    { src: "/screenshots/activity-details.PNG", title: { en: "Activity Details", fr: "Details Activite" } },
    { src: "/screenshots/activity-details-2.PNG", title: { en: "Activity Details 2", fr: "Details Activite 2" } },
    { src: "/screenshots/create-activity.PNG", title: { en: "Create Activity", fr: "Creer Activite" } },
    { src: "/screenshots/bookings.PNG", title: { en: "Bookings", fr: "Reservations" } },
    { src: "/screenshots/profile.PNG", title: { en: "Profile", fr: "Profil" } },
    { src: "/screenshots/edit-profile.PNG", title: { en: "Edit Profile", fr: "Modifier Profil" } }
  ];

  const t = {
    nav: {
      features: language === "fr" ? "Fonctionnalites" : "Features",
      technology: language === "fr" ? "Technologie" : "Technology",
      screenshots: language === "fr" ? "Captures" : "Screenshots",
      testing: language === "fr" ? "Qualite" : "Testing",
    },
    hero: {
      badge: language === "fr" ? "Application iOS native • Swift & SwiftUI" : "Native iOS App • Swift & SwiftUI",
      title: language === "fr" ? "Connecter les gens par le sport" : "Connect Through Sports",
      description:
        language === "fr"
          ? "SportLink aide les gens a organiser, decouvrir et rejoindre des activites sportives locales. De la decouverte a la reservation, chaque etape est pensee pour une experience mobile rapide et intuitive."
          : "SportLink helps people organize, discover, and join local sports sessions. From discovery to booking, every step is designed for a fast and intuitive mobile experience.",
      cta: language === "fr" ? "Sortie iOS en cours" : "iOS Release In Progress",
      realtime: language === "fr" ? "Synchronisation temps reel" : "Real-time Sync",
      backend: language === "fr" ? "Backend Firebase" : "Firebase Backend",
    },
    features: {
      title: language === "fr" ? "Fonctionnalites principales" : "Powerful Features",
      subtitle:
        language === "fr"
          ? "Les fonctions cles pour creer des activites, trouver des sessions proches et gerer la participation en temps reel."
          : "Core product capabilities for creating activities, finding nearby sessions, and managing participation in real time.",
    },
    tech: {
      title: language === "fr" ? "Construit avec des technologies modernes" : "Built with Modern Technology",
      subtitle:
        language === "fr"
          ? "Architecture iOS native avec les services Firebase pour la fiabilite, la rapidite et la maintenabilite."
          : "Native iOS architecture backed by Firebase services for reliability, speed, and maintainability.",
      architectureTitle: language === "fr" ? "Vue d'ensemble de l'architecture" : "Architecture Overview",
      architectureSubtitle:
        language === "fr"
          ? "Architecture propre et modulaire suivant les bonnes pratiques iOS"
          : "Clean, modular architecture following iOS best practices",
    },
    screenshots: {
      title: language === "fr" ? "Captures d'ecran" : "App Screenshots",
      subtitle:
        language === "fr"
          ? "Un apercu visuel des parcours cles: onboarding, decouverte, reservation et gestion du profil."
          : "A visual walkthrough of the key user journeys across onboarding, discovery, booking, and profile management.",
    },
    testing: {
      title: language === "fr" ? "Qualite et performance" : "Quality & Performance",
      subtitle:
        language === "fr"
          ? "Des workflows de test et d'optimisation axes sur la stabilite, la reactivite et la fiabilite."
          : "Testing and optimization workflows focused on stability, responsiveness, and day-to-day reliability.",
    },
    footer: {
      tagline:
        language === "fr"
          ? "Une application iOS native pour decouvrir et organiser des activites sportives locales"
          : "A native iOS app for discovering and organizing local sports activities",
      rights: language === "fr" ? "Tous droits reserves." : "All rights reserved.",
    },
  };
  const tr = (en: string, fr: string) => (language === "fr" ? fr : en);

  return (
    <div className="min-h-screen text-[#6f1220] dark:text-[#ffd6dd] [&_.text-muted-foreground]:text-[#963444] dark:[&_.text-muted-foreground]:text-[#e7b8c1]">
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
              <span className="text-xl font-bold text-[#d11b37] dark:text-[#ff9cab]">SportLink</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-[#8f1528] dark:text-[#f6c1ca] hover:text-[#d11b37] dark:hover:text-[#ff9cab] transition-colors">{t.nav.features}</a>
              <a href="#technology" className="text-sm font-medium text-[#8f1528] dark:text-[#f6c1ca] hover:text-[#d11b37] dark:hover:text-[#ff9cab] transition-colors">{t.nav.technology}</a>
              <a href="#screenshots" className="text-sm font-medium text-[#8f1528] dark:text-[#f6c1ca] hover:text-[#d11b37] dark:hover:text-[#ff9cab] transition-colors">{t.nav.screenshots}</a>
              <a href="#testing" className="text-sm font-medium text-[#8f1528] dark:text-[#f6c1ca] hover:text-[#d11b37] dark:hover:text-[#ff9cab] transition-colors">{t.nav.testing}</a>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="border-[#d11b37]/40 text-[#d11b37] hover:bg-[#d11b37]/10 dark:text-[#ff9cab] dark:border-[#ff9cab]/50 dark:hover:bg-[#ff9cab]/10"
              >
                {language === "en" ? "FR" : "EN"}
              </Button>
              {switchable && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="border-[#d11b37]/40 text-[#d11b37] hover:bg-[#d11b37]/10 dark:text-[#ff9cab] dark:border-[#ff9cab]/50 dark:hover:bg-[#ff9cab]/10"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span className="ml-2 hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
                </Button>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#ffe9ed] via-background to-background dark:from-[#351018] dark:via-background dark:to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2 border-[#d11b37]/20 bg-[#d11b37]/10 text-[#a0142b] dark:bg-[#ff9cab]/20 dark:text-[#ffd3da]" variant="secondary">
              {t.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#d11b37] to-[#9b1630] dark:from-[#ff9cab] dark:to-[#ffd1d9] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" disabled>
                <Calendar className="w-5 h-5 mr-2" />
                {t.hero.cta}
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS 17+</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{t.hero.realtime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>{t.hero.backend}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#b3172f] dark:text-[#ffb6c2]">{t.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Complete Authentication", "Authentification complete")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Secure sign-in and registration with Firebase Authentication, including profile setup, sports preferences, and availability.",
                    "Connexion et inscription securisees avec Firebase Authentication, incluant la configuration du profil, les sports preferes et les disponibilites.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("User Profiles", "Profils utilisateurs")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Personalized profiles with sports interests, schedule preferences, and editable account information.",
                    "Profils personnalises avec interets sportifs, preferences d'horaire et informations de compte modifiables.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Interactive Maps", "Cartes interactives")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Explore venues and activities with map markers, filters, and zoom-aware discovery powered by Apple MapKit.",
                    "Explorez les lieux et activites avec des marqueurs, des filtres et une decouverte adaptee au zoom via Apple MapKit.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Search & Filter Activities", "Recherche et filtres d'activites")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Switch between map and list views, then refine results by date, distance, and sport type.",
                    "Basculez entre la vue carte et liste, puis affinez les resultats par date, distance et type de sport.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Create & Manage Activities", "Creer et gerer des activites")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Create complete events with schedule, location, participant limits, and details, then update or manage them later.",
                    "Creez des evenements complets avec horaire, lieu, limite de participants et details, puis mettez-les a jour facilement.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Real-time Updates", "Mises a jour en temps reel")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Activity and participation changes sync instantly with Firestore to keep everyone on the same page.",
                    "Les changements d'activites et de participation se synchronisent instantanement avec Firestore.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Smart Recommendations", "Recommandations intelligentes")}</CardTitle>
                <CardDescription>
                  {tr(
                    "The home experience surfaces relevant activity suggestions based on your profile and engagement.",
                    "L'accueil met en avant des suggestions pertinentes selon votre profil et votre activite.",
                  )}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{tr("Accessibility Support", "Support d'accessibilite")}</CardTitle>
                <CardDescription>
                  {tr(
                    "Accessibility-first interactions, including VoiceOver-friendly labels and predictable navigation patterns.",
                    "Interactions concues pour l'accessibilite, avec labels compatibles VoiceOver et navigation previsible.",
                  )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#b3172f] dark:text-[#ffb6c2]">{t.tech.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.tech.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Code className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">{tr("Native iOS Development", "Developpement iOS natif")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Swift & SwiftUI</p>
                    <p className="text-sm text-muted-foreground">{tr("Modern declarative UI framework for fluid, native interfaces", "Framework UI declaratif moderne pour des interfaces fluides et natives")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Xcode IDE</p>
                    <p className="text-sm text-muted-foreground">{tr("Real-time simulation and debugging capabilities", "Simulation en temps reel et capacites avancees de debogage")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">iOS 17+ Target</p>
                    <p className="text-sm text-muted-foreground">{tr("Simplified testing and access to latest platform features", "Tests simplifies et acces aux dernieres fonctionnalites de la plateforme")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Native Components</p>
                    <p className="text-sm text-muted-foreground">{tr("Location services, notifications, and calendar integration", "Services de localisation, notifications et integration calendrier")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-3" />
                <CardTitle className="text-2xl">{tr("Cloud Backend", "Backend cloud")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Authentication</p>
                    <p className="text-sm text-muted-foreground">{tr("Secure user authentication and session management", "Authentification utilisateur securisee et gestion des sessions")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cloud Firestore</p>
                    <p className="text-sm text-muted-foreground">{tr("NoSQL database with real-time synchronization", "Base NoSQL avec synchronisation en temps reel")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Firebase Storage</p>
                    <p className="text-sm text-muted-foreground">{tr("Scalable cloud storage for profile images and media", "Stockage cloud evolutif pour images de profil et medias")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Apple MapKit</p>
                    <p className="text-sm text-muted-foreground">{tr("Native map integration with sports facility data and location services", "Integration carte native avec donnees d'infrastructures sportives et services de localisation")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.tech.architectureTitle}</CardTitle>
                <CardDescription>
                  {t.tech.architectureSubtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">AppEntry</p>
                    <p className="text-sm text-muted-foreground">{tr("Application initialization", "Initialisation de l'application")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Authentication</p>
                    <p className="text-sm text-muted-foreground">{tr("Login & registration flows", "Flux de connexion et d'inscription")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Core</p>
                    <p className="text-sm text-muted-foreground">{tr("Models, services & extensions", "Modeles, services et extensions")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Navigation</p>
                    <p className="text-sm text-muted-foreground">{tr("Home, Discover, Create, Bookings", "Accueil, Decouvrir, Creer, Reservations")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Resources</p>
                    <p className="text-sm text-muted-foreground">{tr("Assets & configuration", "Assets et configuration")}</p>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <p className="font-semibold mb-1">Shared</p>
                    <p className="text-sm text-muted-foreground">{tr("Reusable components", "Composants reutilisables")}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#b3172f] dark:text-[#ffb6c2]">{t.screenshots.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.screenshots.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg mb-8">
              <div className="relative w-full bg-muted/50 flex items-center justify-center" style={{ height: "650px" }}>
                <img
                  src={screenshots[selectedScreenshot].src}
                  alt={screenshots[selectedScreenshot].title[language]}
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
                  {screenshot.title[language]}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#b3172f] dark:text-[#ffb6c2]">{t.testing.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.testing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{tr("Unit & Functional Tests", "Tests unitaires et fonctionnels")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tr(
                    "XCTest coverage across models, ViewModels, and key user flows to reduce regressions as features evolve.",
                    "Couverture XCTest sur les modeles, ViewModels et flux cles pour limiter les regressions.",
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{tr("Performance Metrics", "Indicateurs de performance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tr(
                    "Iterative profiling to improve CPU and memory behavior during map rendering, navigation, and list interactions.",
                    "Profiling iteratif pour ameliorer CPU et memoire lors du rendu carte, de la navigation et des interactions liste.",
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{tr("Usability Testing", "Tests d'utilisabilite")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tr(
                    "Structured validation with real users and practical scenarios to refine UX decisions before release.",
                    "Validation structuree avec de vrais utilisateurs et scenarios pratiques pour affiner l'UX avant la sortie.",
                  )}
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
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 SportLink. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
