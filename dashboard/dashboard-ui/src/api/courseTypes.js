import axios from 'axios'

const url = 'http://localhost:3000'

const CourseTypes = {
    find() {
        const parsedUrl = `${url}/courseTypes`

        return axios.get(parsedUrl).then( response => {
            return { success: true, data: response.data}
        }).catch(err => {
            return { success: false, error: err}
        })
    }
}

export default CourseTypes