import axios from 'axios'

const url = 'http://localhost:3000'

const Courses = {
    findOne(id) {
        const parsedUrl = `${url}/courses/${id}`
        axios.get(parsedUrl).then(response => {
            return response
        })
    },
    find(typeId, date) {
        const transformedType = !typeId ? '' : typeId
        const transformedDate = !date ? '' : date

        const parsedUrl = `${url}/courses?typeId=${transformedType}&date=${transformedDate}`

        return axios.get(parsedUrl).then( response => {
            return { success: true, data: response.data}
        }).catch(err => {
            return { success: false, error: err}
        })

    }
}

export default Courses