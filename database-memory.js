import { randomUUID } from 'crypto'

export class DataBaseMemory {
    #videos = new Map()

    list(search) {
       return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
       })
       .filter(video => {
        if (search) {
            return video.title.includes(search)
        }

        return true
       })
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id, video) {
        this.#videos.delete(id, video)
    }
}