import { describe, expect, it } from 'vitest'
import { isEmail } from './isEmail'

const seeded = () => {
    let state = 987654321
    return () => {
        state = (state * 1664525 + 1013904223) % 4294967296
        return state / 4294967296
    }
}

const random = seeded()
const randInt = (min: number, max: number) => Math.floor(random() * (max - min + 1)) + min
const pick = (chars: string) => (len: number) =>
    Array.from({ length: len }, () => chars[randInt(0, chars.length - 1)]).join('')

const letters = pick('abcdefghijklmnopqrstuvwxyz')
const safeLocal = pick('abcdefghijklmnopqrstuvwxyz0123456789._+-')
const safeDomain = pick('abcdefghijklmnopqrstuvwxyz0123456789-')
const randomEmail = () =>
    `${safeLocal(randInt(1, 20))}@${safeDomain(randInt(3, 15))}.${letters(randInt(2, 6))}`

describe('isEmail', () => {
    it('acepta emails generados con estructura válida', () => {
        for (let i = 0; i < 30; i++) {
            expect(isEmail(randomEmail())).toBe(true)
        }
    })

    it('rechaza cadenas generadas sin @', () => {
        for (let i = 0; i < 10; i++) {
            const noAt = `${safeLocal(randInt(1, 15))}${letters(randInt(2, 6))}`

            expect(isEmail(noAt)).toBe(false)
        }
    })

    it('rechaza direcciones generadas sin TLD válido', () => {
        for (let i = 0; i < 10; i++) {
            const withoutTld = `${safeLocal(randInt(1, 15))}@${safeDomain(randInt(3, 10))}`
            const shortTld = `${safeLocal(randInt(1, 15))}@${safeDomain(randInt(3, 10))}.${letters(randInt(0, 1))}`

            expect(isEmail(withoutTld)).toBe(false)
            expect(isEmail(shortTld)).toBe(false)
        }
    })

    it('rechaza direcciones generadas con espacios', () => {
        for (let i = 0; i < 10; i++) {
            const spacedEmail = `${safeLocal(randInt(1, 8))} ${safeLocal(randInt(1, 8))}@${safeDomain(randInt(3, 10))}.${letters(randInt(2, 4))}`

            expect(isEmail(spacedEmail)).toBe(false)
        }
    })

    it('rechaza strings vacíos y solo con espacios', () => {
        expect(isEmail('')).toBe(false)
        expect(isEmail('   ')).toBe(false)
    })
})