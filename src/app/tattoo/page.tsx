'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import {
  GlobalContainer,
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SectionTitle,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactTitle,
  ContactText,
  GiftCardPrice,
  GiftCardDescription,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  ScreenOverlay,
  ScreenContent,
  CloseButton,
} from './styles';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothHeroY = useSpring(heroY, springConfig);
  const smoothHeroOpacity = useSpring(heroOpacity, springConfig);
  const smoothHeroScale = useSpring(heroScale, springConfig);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const openScreen = (screen: string) => {
    setCurrentScreen(screen);
  };

  const closeScreen = () => {
    setCurrentScreen(null);
  };

  const faqData = [
    {
      question: "How old do I need to be to get a tattoo?",
      answer: "The minimum age at our studio is 18 years old. No exceptions. So please bring a valid ID! With this strict regulation we also tend to protect minors of getting a tattoo they will eventually regret."
    },
    {
      question: "Does it hurt?",
      answer: "Yes! But everyone experiences it in a different way. Some places hurt more then other places and some even say they are addicted to the pain!"
    },
    {
      question: "How do I book an appointment?",
      answer: "Fill in the contact form or send us a mail (info@inkdistrict.nl) with a detailed description of your preferred design, style, placement on body and size. You can also add some inspiration pictures (max 5). We will then get back to you as soon as possible."
    },
    {
      question: "How should I come to the studio?",
      answer: "Please make sure you are welrested and have had a meal before your appointment. We recommend coming by yourself, our waiting room is primarily reserved for waiting customers and not for extra's."
    },
    {
      question: "Do I need to pay a deposit for an appointment?",
      answer: "Yes. For every appointment we ask for a deposit of 50 EUR for the smaller to medium projects or 100 EUR for the larger projects, which can be paid at the shop or transferred through our bank."
    },
    {
      question: "What are your prices?",
      answer: "This depends on the artist but our minimum shop price is 100 EUR. Final price depends on size, detail of the design, location on the body and finally which artist."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept cash, pin, credit cards and even bitcoins. Our guest artists only accept cash!"
    },
    {
      question: "Can I bring someone with me to the appointment?",
      answer: "Of course you can come with someone but we only have very limited sitting space at the front of the shop. The back of the shop is prohibited for any family or friends you bring along."
    },
    {
      question: "Any tips before getting a tattoo?",
      answer: "We recommend that you have a good night's rest, have a good meal and stay hydrated before your appointment. We can only work with you if you are 100% sober, being under the influence of alcohol or any drugs will get you removed from the shop."
    },
    {
      question: "How do I take care of my tattoo?",
      answer: "A new tattoo is similar to an abrasion/wound. It takes approximately 4 to 6 weeks for the wound and the skin around it to be healed. Wash the tattoo twice a day with a mild fragrance free soap and apply a thin layer of cream as recommended by your tattooist."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderScreenContent = (screen: string) => {
    switch (screen) {
      case 'info':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Information
            </SectionTitle>

            <ContactGrid>
              <ContactCard variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}>
                <ContactIcon>📧</ContactIcon>
                <ContactTitle>Email</ContactTitle>
                <ContactText>info@blablabla</ContactText>
              </ContactCard>

              <ContactCard variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}>
                <ContactIcon>📱</ContactIcon>
                <ContactTitle>Instagram</ContactTitle>
                <ContactText>@blablabla</ContactText>
              </ContactCard>

              <ContactCard variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}>
                <ContactIcon>📞</ContactIcon>
                <ContactTitle>Give us a call</ContactTitle>
                <ContactText>+31 blablabla</ContactText>
              </ContactCard>

              <ContactCard variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}>
                <ContactIcon>📍</ContactIcon>
                <ContactTitle>Address</ContactTitle>
                <ContactText>blablabla</ContactText>
                <ContactText>blablabla</ContactText>
              </ContactCard>
            </ContactGrid>
          </motion.div>
        );

      case 'faq':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked Questions
            </SectionTitle>

            {faqData.map((faq, index) => (
              <FAQItem key={index} variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}>
                <FAQQuestion
                  $isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span>{openFAQ === index ? '−' : '+'}</span>
                </FAQQuestion>
                <FAQAnswer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ paddingBottom: openFAQ === index ? '25px' : '0' }}
                >
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </motion.div>
        );

      case 'shop':
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle style={{ color: 'white' }}>Gift Card</SectionTitle>
            <GiftCardPrice>€50,00 — €1000,00</GiftCardPrice>
            <GiftCardDescription>
              Ultimate gift for tattoolovers! The perfect gift that can be used for all payments at our studio.
              This cool card can be used like a creditcard and can be swiped through our machines at payments.
              Perfect to pass around and share with all your friends.
            </GiftCardDescription>
            <GiftCardDescription>
              Card cannot be exchanged for money and has an expiration date of 1 year.
            </GiftCardDescription>
          </motion.div>
        );

      case 'gallery':
        return <Gallery />;

      default:
        return null;
    }
  };

  return (
    <GlobalContainer>
      <Navigation onMenuClick={openScreen} />

      <AnimatePresence>
        {currentScreen ? (
          <ScreenOverlay
            variants={{
              hidden: { opacity: 0, x: '100%' },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              },
              exit: {
                opacity: 0,
                x: '-100%',
                transition: { duration: 0.3, ease: "easeIn" }
              }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ScreenContent>
              {renderScreenContent(currentScreen)}
            </ScreenContent>

            <CloseButton
              onClick={closeScreen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ×
            </CloseButton>
          </ScreenOverlay>
        ) : (
          <>
            <HeroSection>
              <HeroBackground style={{ y: smoothHeroY, opacity: smoothHeroOpacity, scale: smoothHeroScale }} />
              <HeroContent
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <HeroTitle>ISRAEL CELLI</HeroTitle>
                <HeroSubtitle>Den Haag&apos;s Best Tattoo Artist</HeroSubtitle>
              </HeroContent>
            </HeroSection>
          </>
        )}
      </AnimatePresence>
    </GlobalContainer>
  );
} 