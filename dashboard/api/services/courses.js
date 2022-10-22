import { CoursesData } from '../data'

const courses = {
    findOne(id) {
        const courses = CoursesData
        return courses.filter(x => x.id === id)
    },
    find({ typeId, date}) {
        let courses = CoursesData

        if (typeId) 
            courses = courses.filter(x => x.typeId === parseInt(typeId) )
        
        if(date) 
            courses = courses.filter(x => x.releaseDate === date )
    
        return courses
    }
}

export default courses