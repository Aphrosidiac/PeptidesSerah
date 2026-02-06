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
  { id: "1", name: "5-Amino-1MQ 10mg", slug: "5-amino-1mq-10mg", price: 67, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/5-amino-1mq-10mg-284x300.jpg" },
  { id: "2", name: "5-Amino-1MQ 50mg", slug: "5-amino-1mq-50mg", price: 145, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/5-amino-1mq-50mg-284x300.jpg" },
  { id: "3", name: "Abaloparatide 3mg", slug: "abaloparatide-3mg", price: 100, categories: ["peptides-for-sale", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/abaloparatide-3mg-284x300.jpg" },
  { id: "4", name: "Adamax 10mg", slug: "adamax-10mg", price: 62, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/adamax-10mg-284x300.jpg" },
  { id: "5", name: "Adipotide 10mg", slug: "adipotide-10mg", price: 75, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/adipotide-10mg-284x300.jpg" },
  { id: "6", name: "AHK-CU Raws 10g", slug: "ahk-cu-raws-10g", price: 250, originalPrice: 300, categories: ["peptides-for-sale", "cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ahk-cu-10g-284x300.jpg" },
  { id: "7", name: "AOD 9604 5mg", slug: "aod-9604-5mg", price: 50, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/aod-9604-5mg-284x300.jpg" },
  { id: "8", name: "ARA-290 16mg", slug: "ara-290-16mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ara-290-16mg-284x300.jpg" },
  { id: "9", name: "BAC Water 3ml with 10vials (1kit)", slug: "bac-water-3ml-10vials", price: 65, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/11/bac-water-3ml-284x300.jpg" },
  { id: "10", name: "BPC-157 10mg", slug: "bpc-157-10mg", price: 45, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/bpc-157-10mg-284x300.jpg" },
  { id: "11", name: "BPC-157 10mg & TB-500 10mg", slug: "bpc-157-10mg-tb-500-10mg", price: 86, categories: ["peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/bpc-157-10mg-4-tb-500-10mg-284x300.jpg" },
  { id: "12", name: "BPC-157 20mg", slug: "bpc-157-20mg", price: 64, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/bpc-157-10mg-284x300.jpg" },
  { id: "13", name: "BPC-157 30mg & TB-500 30mg", slug: "bpc-157-30mg-tb-500-30mg", price: 149, categories: ["peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/12/BPC157-tb500-3030-284x300.jpg" },
  { id: "14", name: "BPC-157 40mg", slug: "bpc-157-40mg", price: 85, originalPrice: 100, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/11/BPC-157-40MG-284x300.jpg" },
  { id: "15", name: "BPC-157 5mg & TB-500 5mg", slug: "bpc-157-5mg-tb-500-5mg", price: 50, categories: ["peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/bpc-157-10mg-4-tb-500-10mg-284x300.jpg" },
  { id: "16", name: "Bronchogen 20mg", slug: "bronchogen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/bronchogen-20mg-284x300.jpg" },
  { id: "17", name: "Cagrilintide 10mg", slug: "cagrilintide-10mg", price: 85, categories: ["peptides-for-sale", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cagrilintide-10mg-284x300.jpg" },
  { id: "18", name: "Cagrilintide 5mg", slug: "cagrilintide-5mg", price: 55, categories: ["peptides-for-sale", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cagrilintide-5mg-284x300.jpg" },
  { id: "19", name: "Cardiogen 20mg", slug: "cardiogen-20mg", price: 58, categories: ["peptides-for-sale", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cardiogen-20mg-284x300.jpg" },
  { id: "20", name: "Cartalax 20mg", slug: "cartalax-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cartalax-20mg-284x300.jpg" },
  { id: "21", name: "Cerebrolysin 30mg", slug: "cerebrolysin-30mg", price: 80, categories: ["popular-peptides", "cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cerebrolysin-30mg-284x300.jpg" },
  { id: "22", name: "Chonluten 20mg", slug: "chonluten-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/chonluten-20mg-284x300.jpg" },
  { id: "23", name: "CJC-1295 + Ipamorelin (5/5mg)", slug: "cjc-1295-ipamorelin-5-5mg", price: 75, categories: ["popular-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cjc-1295-no-dac-5mg-ipamorelin-5mg-284x300.jpg" },
  { id: "24", name: "CJC-1295 + Ipamorelin blend (6/11mg)", slug: "cjc-1295-ipamorelin-6-11mg", price: 100, originalPrice: 120, categories: ["peptides-for-sale", "popular-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/11/cjc1295-ipamorelin-15mg-284x300.png" },
  { id: "25", name: "CJC-1295 no dac 10mg", slug: "cjc-1295-no-dac-10mg", price: 78, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cjc-1295-no-dac-10mg-284x300.jpg" },
  { id: "26", name: "CJC-1295 with DAC 5mg", slug: "cjc-1295-with-dac-5mg", price: 46, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cjc-1295-with-dac-5mg-284x300.jpg" },
  { id: "27", name: "Coremend Blends", slug: "coremend-blends", price: 160, categories: ["popular-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/Coremend-30mg-284x300.jpg" },
  { id: "28", name: "Cortagen 20mg", slug: "cortagen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/cortagen-20mg-284x300.jpg" },
  { id: "29", name: "Crystagen 20mg", slug: "crystagen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/crystagen-20mg-284x300.jpg" },
  { id: "30", name: "DSIP 10mg", slug: "dsip-10mg", price: 45, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/12/DSIP-10mg-284x300.jpg" },
  { id: "31", name: "DSIP 5mg", slug: "dsip-5mg", price: 30, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/DSIP-5MG-284x300.jpg" },
  { id: "32", name: "Epitalon 10mg", slug: "epitalon-10mg", price: 38, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/epitalon-10mg-284x300.jpg" },
  { id: "33", name: "Epitalon 50mg", slug: "epitalon-50mg", price: 109, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/epitalon-50mg-284x300.jpg" },
  { id: "34", name: "FOX04 10mg", slug: "fox04-10mg", price: 180, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/foxo4-10mg-284x300.jpg" },
  { id: "35", name: "GAC Water 3ml with 10vials (1kit)", slug: "gac-water-3ml-10vials", price: 65, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/12/gac-water-3ml-284x300.jpg" },
  { id: "36", name: "GHK-CU 100mg", slug: "ghk-cu-100mg", price: 70, categories: ["cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ghk-cu-100mg-284x300.jpg" },
  { id: "37", name: "GHK-CU 50mg", slug: "ghk-cu-50mg", price: 46, categories: ["cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ghk-cu-50mg-284x300.jpg" },
  { id: "38", name: "GHK-CU Raws 10g", slug: "ghk-cu-raws-10g", price: 189, categories: ["cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ghk-cu-10g-284x300.jpg" },
  { id: "39", name: "GHRP-2 10mg", slug: "ghrp-2-10mg", price: 40, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ghrp-2-10mg-284x300.jpg" },
  { id: "40", name: "GHRP-6 10mg", slug: "ghrp-6-10mg", price: 42, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ghrp-6-10mg-284x300.jpg" },
  { id: "41", name: "GLOW Blend 70mg", slug: "glow-blend-70mg", price: 92, categories: ["popular-peptides", "cosmetic-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/glow-70mg-1-284x300.jpg" },
  { id: "42", name: "Glutathione 1500mg GMP", slug: "glutathione-1500mg-gmp", price: 70, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/glutathione-1500mb-gmp-284x300.jpg" },
  { id: "43", name: "Glutathione 600mg GMP", slug: "glutathione-600mg-gmp", price: 65, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/glutathione-600mg-gmp-284x300.jpg" },
  { id: "44", name: "HCG 1000iu GMP", slug: "hcg-1000iu-gmp", price: 40, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hcg-1000-gmp-284x300.jpg" },
  { id: "45", name: "HCG 2000IU GMP", slug: "hcg-2000iu-gmp", price: 60, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hcg-2000-gmp-284x300.jpg" },
  { id: "46", name: "HCG 4000IU GMP", slug: "hcg-4000iu-gmp", price: 100, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hcg-4000iu-284x300.jpg" },
  { id: "47", name: "HCG 5000 GMP", slug: "hcg-5000-gmp", price: 110, originalPrice: 150, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hcg-5000-gmp-284x300.jpg" },
  { id: "48", name: "HGH 10IU", slug: "hgh-10iu", price: 35, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hgh-10iu-284x300.jpg" },
  { id: "49", name: "HMG 75IU GMP", slug: "hmg-75iu-gmp", price: 35, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/hmg-75%C3%976-gmp-284x300.jpg" },
  { id: "50", name: "IGF-1 lR3 1mg", slug: "igf-1-lr3-1mg", price: 120, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/igf-1-lr3-1mg-284x300.jpg" },
  { id: "51", name: "Illumineuro", slug: "illumineuro", price: 140, categories: ["popular-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/Illumineuro-46mg-284x300.jpg" },
  { id: "52", name: "Ipamorelin 10mg", slug: "ipamorelin-10mg", price: 60, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ipamorelin-10mg-284x300.jpg" },
  { id: "53", name: "Kisspeptin-10 10mg", slug: "kisspeptin-10-10mg", price: 58, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/kisspeptin-10-10mg-284x300.jpg" },
  { id: "54", name: "Klow Blend 80mg", slug: "klow-blend-80mg", price: 120, categories: ["popular-peptides", "cosmetic-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/klow-80-1-284x300.jpg" },
  { id: "55", name: "KPV 10mg", slug: "kpv-10mg", price: 60, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/kpv-10mg-284x300.jpg" },
  { id: "56", name: "KPV 30mg", slug: "kpv-30mg", price: 85, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/12/KPV-30mg-284x300.jpg" },
  { id: "57", name: "Livagen 20mg", slug: "livagen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/livagen-20mg-284x300.jpg" },
  { id: "58", name: "LL-37 5mg", slug: "ll-37-5mg", price: 62, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ll37-5mg-284x300.jpg" },
  { id: "59", name: "Mazdutide 10mg", slug: "mazdutide-10mg", price: 76, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/11/mazdutide-10mg-284x300.jpg" },
  { id: "60", name: "Melanotan 1 10mg", slug: "melanotan-1-10mg", price: 39, categories: ["melanotan-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/melanotan-1-10mg-284x300.jpg" },
  { id: "61", name: "Melanotan 2 10mg", slug: "melanotan-2-10mg", price: 43, categories: ["melanotan-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/melanotan-2-10mg-284x300.jpg" },
  { id: "62", name: "MOTS-C 10mg", slug: "mots-c-10mg", price: 60, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/motsc-10mg-284x300.jpg" },
  { id: "63", name: "MOTS-C 20mg", slug: "mots-c-20mg", price: 79, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/motsc-20mg-284x300.jpg" },
  { id: "64", name: "MOTS-C 40mg", slug: "mots-c-40mg", price: 109, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/motsc-40mg-284x300.jpg" },
  { id: "65", name: "Nad+ 500mg", slug: "nad-500mg", price: 66, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/nad-500mg-284x300.jpg" },
  { id: "66", name: "Ovagen 20mg", slug: "ovagen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ovagen-20mg-284x300.jpg" },
  { id: "67", name: "Oxytocin 10mg", slug: "oxytocin-10mg", price: 52, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/oxytocin-10mg-284x300.jpg" },
  { id: "68", name: "Pancragen 20mg", slug: "pancragen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/pancragen-20mg-284x300.jpg" },
  { id: "69", name: "PE-22-28 10mg", slug: "pe-22-28-10mg", price: 58, categories: ["bioregulators", "cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/pe-22-28-10mg-284x300.jpg" },
  { id: "70", name: "Pinealon 20mg", slug: "pinealon-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/pinealon-20mg-284x300.jpg" },
  { id: "71", name: "PNC-27 30mg", slug: "pnc-27-30mg", price: 199, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/pnc-27-30mg-284x300.jpg" },
  { id: "72", name: "Prostamax 20mg", slug: "prostamax-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/prostamax-20mg-284x300.jpg" },
  { id: "73", name: "PT-141 10mg", slug: "pt-141-10mg", price: 41, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/pt-141-10mg-284x300.jpg" },
  { id: "74", name: "Retatrutide 10mg", slug: "retatrutide-10mg", price: 99, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/retatrutide-10mg-284x300.jpg" },
  { id: "75", name: "Retatrutide 20mg", slug: "retatrutide-20mg", price: 130, originalPrice: 179, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/retatrutide-20mg-284x300.jpg" },
  { id: "76", name: "Retatrutide 30mg", slug: "retatrutide-30mg", price: 175, originalPrice: 256, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/retatrutide-30mg-284x300.jpg" },
  { id: "77", name: "Retatrutide 40mg", slug: "retatrutide-40mg", price: 210, originalPrice: 300, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/retatrutide-40mg-284x300.jpg" },
  { id: "78", name: "Selank 10mg", slug: "selank-10mg", price: 45, categories: ["peptides-for-sale", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/selank-10mg-284x300.jpg" },
  { id: "79", name: "Semaglutide 10mg", slug: "semaglutide-10mg", price: 90, originalPrice: 120, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/semaglutide-10mg-284x300.jpg" },
  { id: "80", name: "Semaglutide 20mg", slug: "semaglutide-20mg", price: 110, originalPrice: 150, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/semaglutide-20mg-284x300.jpg" },
  { id: "81", name: "Semaglutide 5mg", slug: "semaglutide-5mg", price: 70, originalPrice: 99, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/semaglutide-5mg-284x300.jpg" },
  { id: "82", name: "Semax 10mg", slug: "semax-10mg", price: 46, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/semax-10mg-284x300.jpg" },
  { id: "83", name: "Sermorelin 5mg", slug: "sermorelin-5mg", price: 35, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/sermorelin-5mg-284x300.jpg" },
  { id: "84", name: "Snap-8 10mg", slug: "snap-8-10mg", price: 35, categories: ["cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/snap-8-10mg-284x300.jpg" },
  { id: "85", name: "Snap-8 Raw Powder 1g", slug: "snap-8-raw-powder-1g", price: 210, originalPrice: 256, categories: ["peptides-for-sale", "cosmetic-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/snap-8-1g-284x300.jpg" },
  { id: "86", name: "SS-31 10mg", slug: "ss-31-10mg", price: 58, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ss-31-10mg-284x300.jpg" },
  { id: "87", name: "SS-31 30mg", slug: "ss-31-30mg", price: 139, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ss-31-30mg-284x300.jpg" },
  { id: "88", name: "SS-31 50mg", slug: "ss-31-50mg", price: 185, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/ss-31-50mg-284x300.jpg" },
  { id: "89", name: "Survodutide 10mg", slug: "survodutide-10mg", price: 115, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/survodutide-10mg-284x300.jpg" },
  { id: "90", name: "TB-500 10mg", slug: "tb-500-10mg", price: 80, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/thymosin-beta-4-tb-500-10mg-284x300.jpg" },
  { id: "91", name: "Teriparatide 750mcg", slug: "teriparatide-750mcg", price: 58, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/teriparatide-750mcg-284x300.jpg" },
  { id: "92", name: "Tesamorelin 10mg", slug: "tesamorelin-10mg", price: 102, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tesamorelin-10mg-284x300.jpg" },
  { id: "93", name: "Tesamorelin 10mg/ipamorelin 3mg blend", slug: "tesamorelin-10mg-ipamorelin-3mg", price: 120, categories: ["popular-peptides", "peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tesamorelin-10mg-ipamorelin-3mg-284x300.jpg" },
  { id: "94", name: "Tesamorelin 20mg", slug: "tesamorelin-20mg", price: 180, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tesamorelin-20mg-284x300.jpg" },
  { id: "95", name: "Tesamorelin 5mg/ipamorelin 5mg Blend", slug: "tesamorelin-5mg-ipamorelin-5mg", price: 80, categories: ["peptide-blends"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tesamorelin-5mg-ipamorelin-5mg-284x300.jpg" },
  { id: "96", name: "Testagen 20mg", slug: "testagen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/testagen-20mg-284x300.jpg" },
  { id: "97", name: "Thymogen 20mg", slug: "thymogen-20mg", price: 60, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/11/thymogen-284x300.jpg" },
  { id: "98", name: "Thymosin Alpha 1 10mg", slug: "thymosin-alpha-1-10mg", price: 125, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/thymosin-alpha-1-10mg-284x300.jpg" },
  { id: "99", name: "Thymulin 20mg", slug: "thymulin-20mg", price: 40, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/thymulin-10mg-284x300.jpg" },
  { id: "100", name: "Tirzepatide 10mg", slug: "tirzepatide-10mg", price: 70, originalPrice: 100, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tirzepatide-10mg-284x300.jpg" },
  { id: "101", name: "Tirzepatide 15mg", slug: "tirzepatide-15mg", price: 80, originalPrice: 120, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tirzepatide-15mg-284x300.jpg" },
  { id: "102", name: "Tirzepatide 30mg", slug: "tirzepatide-30mg", price: 132, originalPrice: 180, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tirzepatide-30mg-284x300.jpg" },
  { id: "103", name: "Tirzepatide 45mg", slug: "tirzepatide-45mg", price: 135, originalPrice: 200, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tirzepatide-45mg-284x300.jpg" },
  { id: "104", name: "Tirzepatide 60mg", slug: "tirzepatide-60mg", price: 185, originalPrice: 280, categories: ["peptides-for-sale", "popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/tirzepatide-60mg-284x300.jpg" },
  { id: "105", name: "Vesilute 20mg", slug: "vesilute-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/vesilute-20mg-284x300.jpg" },
  { id: "106", name: "Vesugen 20mg", slug: "vesugen-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/vesugen-20mg-284x300.jpg" },
  { id: "107", name: "Vilon 20mg", slug: "vilon-20mg", price: 58, categories: ["bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/vilon-20mg-284x300.jpg" },
  { id: "108", name: "Vip 10mg", slug: "vip-10mg", price: 84, categories: ["popular-peptides", "bioregulators"], image: "https://utherpeptide.com/wp-content/uploads/2025/08/vip-10mg-284x300.jpg" },
  { id: "109", name: "Pay For Extra Shipping Fee", slug: "pay-for-extra-shipping-fee", price: 1.14, categories: ["popular-peptides"], image: "https://utherpeptide.com/wp-content/uploads/2025/09/sfd-300x300.jpg" },
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
