
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Languages, Zap, Gem } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "Bilingual Support",
      description: "Get data in both Arabic and English seamlessly with the `lang` parameter.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Blazing Fast",
      description: "Built on the edge with Next.js, our API responds in milliseconds.",
    },
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: "Completely Free",
      description: "Access all endpoints without any cost or rate limits. Perfect for your next project.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          The Ultimate API for Arabic Countries & Cities
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A modern, fast, and free-to-use REST API that provides extensive data on countries and cities in the Arab world. Perfect for developers, researchers, and creators.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/docs">
              View API Docs <ArrowRight className="mx-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-20 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center border bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
