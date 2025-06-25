
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, User, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About Arabia API Hub</h1>
        <p className="text-lg text-muted-foreground mt-4">Learn more about the project, its mission, and the creator behind it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className="border">
          <CardHeader className="flex flex-row items-center gap-4">
            <User className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="font-headline">The Creator</CardTitle>
              <CardDescription>Mohamed Hany (iVortexx)</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Hi 👋, I'm Mohamed Hany (iVortexx), an AI and backend developer passionate about building innovative solutions. My skills range from Python and JavaScript to Next.js and Firebase. I love building bots, backend systems, and exploring the edge of what's possible with code.
            </p>
          </CardContent>
        </Card>

        <Card className="border">
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="w-8 h-8 text-primary" />
            <div>
              <CardTitle className="font-headline">Our Mission</CardTitle>
              <CardDescription>Why this API was created</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>The goal was simple: create a free, reliable, and easy-to-use API that empowers developers to build applications with rich, localized data for the Arab region. Whether for a hobby project or a commercial application, Arabia API Hub is here to help.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold font-headline mb-4">Contribute to the Project</h2>
        <p className="text-muted-foreground mb-6">This is an open-source project. We welcome contributions, bug reports, and feature requests.</p>
        <Button asChild>
          <a href="https://github.com/iVortexx/arabia-api" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
