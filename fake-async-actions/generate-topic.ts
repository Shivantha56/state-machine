const dummyTopics = [
    '"Exciting progress with SpaceX! More launches soon 🚀" – June 12, 2023',
    '"Starlink expanding global coverage rapidly." – August 5, 2023',
    '"Tesla AI Day 2023 was amazing! The future is autonomous." – September 1, 2023'
  ]

export default function generateFakeTopics(): Promise<string[]> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dummyTopics);
        }, 5000)
    })
}