"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah L., CFO",
    company: "Innovatech Ltd.",
    avatar: "https://placehold.co/100x100.png",
    avatarFallback: "SL",
    text: "SoftSell helped us recover significant value from our unused licenses. The process was surprisingly simple and secure. Highly recommended!",
    rating: 5,
    dataAiHint: "woman professional",
  },
  {
    name: "John B., IT Director",
    company: "Globex Corp.",
    avatar: "https://placehold.co/100x100.png",
    avatarFallback: "JB",
    text: "We saved thousands acquiring licenses through SoftSell. Their platform is transparent and their support team is top-notch.",
    rating: 5,
    dataAiHint: "man suit",
  },
];

const companyLogos = [
  { src: "https://placehold.co/150x50.png?text=CompanyA", alt: "Company A", dataAiHint: "logo tech" },
  { src: "https://placehold.co/150x50.png?text=CompanyB", alt: "Company B", dataAiHint: "logo finance" },
  { src: "https://placehold.co/150x50.png?text=CompanyC", alt: "Company C", dataAiHint: "logo startup" },
  { src: "https://placehold.co/150x50.png?text=CompanyD", alt: "Company D", dataAiHint: "logo enterprise" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
        }`}
      />
    ))}
  </div>
);

export default function SocialProofSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };


  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Leading <span className="text-primary">Enterprises</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their SoftSell experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                      <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/70">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic mb-4">"{testimonial.text}"</p>
                  <StarRating rating={testimonial.rating} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold text-foreground/80 mb-8">
            Join these innovative companies and more
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((logo, index) => (
               <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={logoVariants}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain"
                  data-ai-hint={logo.dataAiHint}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
