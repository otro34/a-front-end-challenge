import React, { useState, useEffect } from 'react'

import { format } from 'date-fns'
import addDays from 'date-fns/addDays'
import { Courses, CourseTypes } from '../../api'
import { constants } from '../../util'

import Layout from '../layout'
import Toolbar from './toolbar'
import Content from './content'

const Dashboard = () => {
    const todayDate = format(addDays(new Date(), 0), constants.DateTimeFormat)

    const [ courses, setCourses ] = useState([])
    const [ courseTypes, setCourseTypes] = useState([])
    const [typeId, setTypeId] = useState(5)
    const [date, setDate] = useState(todayDate)

    const getCourses = () => {
        Courses.find(typeId, date).then( response => {
            setCourses(response.data)
        })
    }

    const getCoursetypes = () => {
        CourseTypes.find().then( response => {
            setCourseTypes(response.data)
        })
    }

    useEffect(() => {
        getCoursetypes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        getCourses(typeId, date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date, typeId])

    const handleDateChange = incommingDate => {
        setDate(incommingDate)
    }

    const handleTypeChange = e => {
        setTypeId(e.target.value)
    }


    return ( 
    <Layout 
        content={<Content courses={courses} />} 
        toolbar={<Toolbar 
                    courseTypes={courseTypes} 
                    typeId={typeId} 
                    onDateChange={handleDateChange}
                    onTypeIdChange={handleTypeChange}/>} />
    )
}

export default Dashboard