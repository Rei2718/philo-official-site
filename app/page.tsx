import MainLayout from "@/components/components/MainLayout";
import ConceptSection from "@/components/components/section/ConceptSection";
import ProductsSection from "@/components/components/section/ProductsSection";
import ContactSection from "@/components/components/section/ContactSection";
import HeroSection2 from "@/components/components/section/HeroSection2";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero（Home）セクション */}
      <HeroSection2/>


      {/* Conceptセクション */}
      <ConceptSection />

      {/* Productsセクション */}
      <ProductsSection />

      {/* Contactセクション */}
      <ContactSection />
    </MainLayout>
  );
}
