export function getCoverage(country: string, insuranceType: string) {
  if (country === 'KE') return insuranceType === 'SHIF' ? 2000 : 45000
  if (country === 'UG') return 1500000
  return 1000
}

export function calcRemaining(limit: number, used: number, fee: number) {
  return limit - used - fee
}

export function getSHATariffs() {
  return {
    SHIF: { limit: 2000, used: 0 },
    POMSF: { limit: 45000, used: 0 }
  }
}