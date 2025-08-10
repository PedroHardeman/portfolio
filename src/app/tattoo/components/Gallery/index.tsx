'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GallerySection, Container, GalleryTitle, GalleryGrid, GalleryItem, GalleryImage, GalleryDescription, GalleryText, GalleryIntro } from './styles';

export default function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const galleryItems = [
    {
      title: "Fine Line Tattoos",
      description: "Delicate and detailed fine line work by our specialists"
    },
    {
      title: "Traditional Tattoos",
      description: "Classic traditional designs with bold colors and strong outlines"
    },
    {
      title: "Black & Grey",
      description: "Stunning black and grey realism and portrait work"
    },
    {
      title: "Custom Designs",
      description: "Unique custom designs created specifically for each client"
    },
    {
      title: "Cover-up Work",
      description: "Professional cover-up tattoos to transform existing work"
    },
    {
      title: "Small Tattoos",
      description: "Perfect small tattoos for first-timers or minimal designs"
    }
  ];

  return (
    <GallerySection id="gallery" ref={ref}>
      <Container>
        <GalleryTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Work
        </GalleryTitle>

        <GalleryIntro
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Check out some examples of our artists&apos; work. Each piece is unique and created with care.
        </GalleryIntro>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GalleryGrid>
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <GalleryImage>
                  {item.title}
                </GalleryImage>
                <GalleryDescription>{item.title}</GalleryDescription>
                <GalleryText>{item.description}</GalleryText>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </motion.div>
      </Container>
    </GallerySection>
  );
}
