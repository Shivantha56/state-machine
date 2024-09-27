const fakeResearch:string = `${'Starlink is a satellite internet constellation project developed by SpaceX, the aerospace company founded by Elon Musk. The project aims to provide global broadband internet coverage, especially in remote and underserved areas where traditional internet infrastructure is challenging or expensive to install. Below is an overview of Starlink, including its goals, technology, and current status. 1. Key Objectives Global Internet Coverage: Starlink'}`

export default function generateFakeResearch(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fakeResearch);
        }, 5000)
    })
}