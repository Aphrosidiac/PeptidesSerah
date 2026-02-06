export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  categories: string[];
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export const categories: Category[] = [
  { name: "Peptides for Sale", slug: "peptides-for-sale", count: 24 },
  { name: "Popular Peptides", slug: "popular-peptides", count: 64 },
  { name: "Bioregulators", slug: "bioregulators", count: 40 },
  { name: "Cosmetic Peptides", slug: "cosmetic-peptides", count: 10 },
  { name: "Melanotan Peptides", slug: "melanotan-peptides", count: 2 },
  { name: "Peptide Blends", slug: "peptide-blends", count: 11 },
];

export const products: Product[] = [
  { id: "1", name: "5-Amino-1MQ 10mg", slug: "5-amino-1mq-10mg", price: 67, categories: ["bioregulators"], image: "/vial.png" },
  { id: "2", name: "5-Amino-1MQ 50mg", slug: "5-amino-1mq-50mg", price: 145, categories: ["bioregulators"], image: "/vial.png" },
  { id: "3", name: "Abaloparatide 3mg", slug: "abaloparatide-3mg", price: 100, categories: ["peptides-for-sale", "bioregulators"], image: "/vial.png" },
  { id: "4", name: "Adamax 10mg", slug: "adamax-10mg", price: 62, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "5", name: "Adipotide 10mg", slug: "adipotide-10mg", price: 75, categories: ["bioregulators"], image: "/vial.png" },
  { id: "6", name: "AHK-CU Raws 10g", slug: "ahk-cu-raws-10g", price: 250, originalPrice: 300, categories: ["peptides-for-sale", "cosmetic-peptides"], image: "/vial.png" },
  { id: "7", name: "AOD 9604 5mg", slug: "aod-9604-5mg", price: 50, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "8", name: "ARA-290 16mg", slug: "ara-290-16mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "9", name: "BAC Water 3ml with 10vials (1kit)", slug: "bac-water-3ml-10vials", price: 65, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "10", name: "BPC-157 10mg", slug: "bpc-157-10mg", price: 45, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "11", name: "BPC-157 10mg & TB-500 10mg", slug: "bpc-157-10mg-tb-500-10mg", price: 86, categories: ["peptide-blends"], image: "/vial.png" },
  { id: "12", name: "BPC-157 20mg", slug: "bpc-157-20mg", price: 64, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "13", name: "BPC-157 30mg & TB-500 30mg", slug: "bpc-157-30mg-tb-500-30mg", price: 149, categories: ["peptide-blends"], image: "/vial.png" },
  { id: "14", name: "BPC-157 40mg", slug: "bpc-157-40mg", price: 85, originalPrice: 100, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "15", name: "BPC-157 5mg & TB-500 5mg", slug: "bpc-157-5mg-tb-500-5mg", price: 50, categories: ["peptide-blends"], image: "/vial.png" },
  { id: "16", name: "Bronchogen 20mg", slug: "bronchogen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "17", name: "Cagrilintide 10mg", slug: "cagrilintide-10mg", price: 85, categories: ["peptides-for-sale", "bioregulators"], image: "/vial.png" },
  { id: "18", name: "Cagrilintide 5mg", slug: "cagrilintide-5mg", price: 55, categories: ["peptides-for-sale", "bioregulators"], image: "/vial.png" },
  { id: "19", name: "Cardiogen 20mg", slug: "cardiogen-20mg", price: 58, categories: ["peptides-for-sale", "bioregulators"], image: "/vial.png" },
  { id: "20", name: "Cartalax 20mg", slug: "cartalax-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "21", name: "Cerebrolysin 30mg", slug: "cerebrolysin-30mg", price: 80, categories: ["popular-peptides", "cosmetic-peptides"], image: "/vial.png" },
  { id: "22", name: "Chonluten 20mg", slug: "chonluten-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "23", name: "CJC-1295 + Ipamorelin (5/5mg)", slug: "cjc-1295-ipamorelin-5-5mg", price: 75, categories: ["popular-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "24", name: "CJC-1295 + Ipamorelin blend (6/11mg)", slug: "cjc-1295-ipamorelin-6-11mg", price: 100, originalPrice: 120, categories: ["peptides-for-sale", "popular-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "25", name: "CJC-1295 no dac 10mg", slug: "cjc-1295-no-dac-10mg", price: 78, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "26", name: "CJC-1295 with DAC 5mg", slug: "cjc-1295-with-dac-5mg", price: 46, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "27", name: "Coremend Blends", slug: "coremend-blends", price: 160, categories: ["popular-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "28", name: "Cortagen 20mg", slug: "cortagen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "29", name: "Crystagen 20mg", slug: "crystagen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "30", name: "DSIP 10mg", slug: "dsip-10mg", price: 45, categories: ["bioregulators"], image: "/vial.png" },
  { id: "31", name: "DSIP 5mg", slug: "dsip-5mg", price: 30, categories: ["bioregulators"], image: "/vial.png" },
  { id: "32", name: "Epitalon 10mg", slug: "epitalon-10mg", price: 38, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "33", name: "Epitalon 50mg", slug: "epitalon-50mg", price: 109, categories: ["bioregulators"], image: "/vial.png" },
  { id: "34", name: "FOX04 10mg", slug: "fox04-10mg", price: 180, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "35", name: "GAC Water 3ml with 10vials (1kit)", slug: "gac-water-3ml-10vials", price: 65, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "36", name: "GHK-CU 100mg", slug: "ghk-cu-100mg", price: 70, categories: ["cosmetic-peptides"], image: "/vial.png" },
  { id: "37", name: "GHK-CU 50mg", slug: "ghk-cu-50mg", price: 46, categories: ["cosmetic-peptides"], image: "/vial.png" },
  { id: "38", name: "GHK-CU Raws 10g", slug: "ghk-cu-raws-10g", price: 189, categories: ["cosmetic-peptides"], image: "/vial.png" },
  { id: "39", name: "GHRP-2 10mg", slug: "ghrp-2-10mg", price: 40, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "40", name: "GHRP-6 10mg", slug: "ghrp-6-10mg", price: 42, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "41", name: "GLOW Blend 70mg", slug: "glow-blend-70mg", price: 92, categories: ["popular-peptides", "cosmetic-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "42", name: "Glutathione 1500mg GMP", slug: "glutathione-1500mg-gmp", price: 70, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "43", name: "Glutathione 600mg GMP", slug: "glutathione-600mg-gmp", price: 65, categories: ["bioregulators"], image: "/vial.png" },
  { id: "44", name: "HCG 1000iu GMP", slug: "hcg-1000iu-gmp", price: 40, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "45", name: "HCG 2000IU GMP", slug: "hcg-2000iu-gmp", price: 60, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "46", name: "HCG 4000IU GMP", slug: "hcg-4000iu-gmp", price: 100, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "47", name: "HCG 5000 GMP", slug: "hcg-5000-gmp", price: 110, originalPrice: 150, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "48", name: "HGH 10IU", slug: "hgh-10iu", price: 35, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "49", name: "HMG 75IU GMP", slug: "hmg-75iu-gmp", price: 35, categories: ["bioregulators"], image: "/vial.png" },
  { id: "50", name: "IGF-1 lR3 1mg", slug: "igf-1-lr3-1mg", price: 120, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "51", name: "Illumineuro", slug: "illumineuro", price: 140, categories: ["popular-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "52", name: "Ipamorelin 10mg", slug: "ipamorelin-10mg", price: 60, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "53", name: "Kisspeptin-10 10mg", slug: "kisspeptin-10-10mg", price: 58, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "54", name: "Klow Blend 80mg", slug: "klow-blend-80mg", price: 120, categories: ["popular-peptides", "cosmetic-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "55", name: "KPV 10mg", slug: "kpv-10mg", price: 60, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "56", name: "KPV 30mg", slug: "kpv-30mg", price: 85, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "57", name: "Livagen 20mg", slug: "livagen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "58", name: "LL-37 5mg", slug: "ll-37-5mg", price: 62, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "59", name: "Mazdutide 10mg", slug: "mazdutide-10mg", price: 76, categories: ["bioregulators"], image: "/vial.png" },
  { id: "60", name: "Melanotan 1 10mg", slug: "melanotan-1-10mg", price: 39, categories: ["melanotan-peptides"], image: "/vial.png" },
  { id: "61", name: "Melanotan 2 10mg", slug: "melanotan-2-10mg", price: 43, categories: ["melanotan-peptides"], image: "/vial.png" },
  { id: "62", name: "MOTS-C 10mg", slug: "mots-c-10mg", price: 60, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "63", name: "MOTS-C 20mg", slug: "mots-c-20mg", price: 79, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "64", name: "MOTS-C 40mg", slug: "mots-c-40mg", price: 109, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "65", name: "Nad+ 500mg", slug: "nad-500mg", price: 66, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "66", name: "Ovagen 20mg", slug: "ovagen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "67", name: "Oxytocin 10mg", slug: "oxytocin-10mg", price: 52, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "68", name: "Pancragen 20mg", slug: "pancragen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "69", name: "PE-22-28 10mg", slug: "pe-22-28-10mg", price: 58, categories: ["bioregulators", "cosmetic-peptides"], image: "/vial.png" },
  { id: "70", name: "Pinealon 20mg", slug: "pinealon-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "71", name: "PNC-27 30mg", slug: "pnc-27-30mg", price: 199, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "72", name: "Prostamax 20mg", slug: "prostamax-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "73", name: "PT-141 10mg", slug: "pt-141-10mg", price: 41, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "74", name: "Retatrutide 10mg", slug: "retatrutide-10mg", price: 99, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "75", name: "Retatrutide 20mg", slug: "retatrutide-20mg", price: 130, originalPrice: 179, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "76", name: "Retatrutide 30mg", slug: "retatrutide-30mg", price: 175, originalPrice: 256, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "77", name: "Retatrutide 40mg", slug: "retatrutide-40mg", price: 210, originalPrice: 300, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "78", name: "Selank 10mg", slug: "selank-10mg", price: 45, categories: ["peptides-for-sale", "bioregulators"], image: "/vial.png" },
  { id: "79", name: "Semaglutide 10mg", slug: "semaglutide-10mg", price: 90, originalPrice: 120, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "80", name: "Semaglutide 20mg", slug: "semaglutide-20mg", price: 110, originalPrice: 150, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "81", name: "Semaglutide 5mg", slug: "semaglutide-5mg", price: 70, originalPrice: 99, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "82", name: "Semax 10mg", slug: "semax-10mg", price: 46, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "83", name: "Sermorelin 5mg", slug: "sermorelin-5mg", price: 35, categories: ["bioregulators"], image: "/vial.png" },
  { id: "84", name: "Snap-8 10mg", slug: "snap-8-10mg", price: 35, categories: ["cosmetic-peptides"], image: "/vial.png" },
  { id: "85", name: "Snap-8 Raw Powder 1g", slug: "snap-8-raw-powder-1g", price: 210, originalPrice: 256, categories: ["peptides-for-sale", "cosmetic-peptides"], image: "/vial.png" },
  { id: "86", name: "SS-31 10mg", slug: "ss-31-10mg", price: 58, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "87", name: "SS-31 30mg", slug: "ss-31-30mg", price: 139, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "88", name: "SS-31 50mg", slug: "ss-31-50mg", price: 185, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "89", name: "Survodutide 10mg", slug: "survodutide-10mg", price: 115, categories: ["bioregulators"], image: "/vial.png" },
  { id: "90", name: "TB-500 10mg", slug: "tb-500-10mg", price: 80, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "91", name: "Teriparatide 750mcg", slug: "teriparatide-750mcg", price: 58, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "92", name: "Tesamorelin 10mg", slug: "tesamorelin-10mg", price: 102, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "93", name: "Tesamorelin 10mg/ipamorelin 3mg blend", slug: "tesamorelin-10mg-ipamorelin-3mg", price: 120, categories: ["popular-peptides", "peptide-blends"], image: "/vial.png" },
  { id: "94", name: "Tesamorelin 20mg", slug: "tesamorelin-20mg", price: 180, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "95", name: "Tesamorelin 5mg/ipamorelin 5mg Blend", slug: "tesamorelin-5mg-ipamorelin-5mg", price: 80, categories: ["peptide-blends"], image: "/vial.png" },
  { id: "96", name: "Testagen 20mg", slug: "testagen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "97", name: "Thymogen 20mg", slug: "thymogen-20mg", price: 60, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "98", name: "Thymosin Alpha 1 10mg", slug: "thymosin-alpha-1-10mg", price: 125, categories: ["popular-peptides"], image: "/vial.png" },
  { id: "99", name: "Thymulin 20mg", slug: "thymulin-20mg", price: 40, categories: ["bioregulators"], image: "/vial.png" },
  { id: "100", name: "Tirzepatide 10mg", slug: "tirzepatide-10mg", price: 70, originalPrice: 100, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "101", name: "Tirzepatide 15mg", slug: "tirzepatide-15mg", price: 80, originalPrice: 120, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "102", name: "Tirzepatide 30mg", slug: "tirzepatide-30mg", price: 132, originalPrice: 180, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "103", name: "Tirzepatide 45mg", slug: "tirzepatide-45mg", price: 135, originalPrice: 200, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "104", name: "Tirzepatide 60mg", slug: "tirzepatide-60mg", price: 185, originalPrice: 280, categories: ["peptides-for-sale", "popular-peptides"], image: "/vial.png" },
  { id: "105", name: "Vesilute 20mg", slug: "vesilute-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "106", name: "Vesugen 20mg", slug: "vesugen-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "107", name: "Vilon 20mg", slug: "vilon-20mg", price: 58, categories: ["bioregulators"], image: "/vial.png" },
  { id: "108", name: "Vip 10mg", slug: "vip-10mg", price: 84, categories: ["popular-peptides", "bioregulators"], image: "/vial.png" },
  { id: "109", name: "Pay For Extra Shipping Fee", slug: "pay-for-extra-shipping-fee", price: 1.14, categories: ["popular-peptides"], image: "/vial.png" },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categories.includes(categorySlug));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}
