import { Course, CourseStatus } from '../model'
import { format } from 'date-fns'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'

const date = format(addDays(new Date(), 0), 'MM-dd-yyyy')
const datemin = format(subDays(new Date(), 1), 'MM-dd-yyyy')
const datemax = format(addDays(new Date(), 1), 'MM-dd-yyyy')

const CoursesData = [
    new Course({
        id: '1',
        typeId: 5,
        releaseDate: date,
        title: "Create a site, no Programming skills required in 2 weeks",
        subscriptionCost: 500,
        status: CourseStatus.Live,
        totalEarned: 15000,
        totalSubscriptions: 900,
        totalViews: '150K',
        totalVacancies: 1000
    }),
    new Course({
        id: '2',
        typeId: 5,
        releaseDate: date,
        title: "Create a site, no programming skills required in 2 weeks - Part II",
        subscriptionCost: 700,
        status: CourseStatus.Saved,
        totalEarned: 10000,
        totalSubscriptions: 400,
        totalViews: '10K',
        totalVacancies: 1000
    }),
    new Course({
        id: '3',
        typeId: 5,
        releaseDate: date,
        title: "Create a site programming skills required",
        subscriptionCost: 10,
        status: CourseStatus.Rejected,
        totalEarned: 0,
        totalSubscriptions: 500,
        totalViews: '0',
        totalVacancies: 1000
    }),
    new Course({
        id: '4',
        typeId: 1,
        releaseDate: datemax,
        title: "Functional programming",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 500,
        totalViews: '130K',
        totalVacancies: 1000
    }),
    new Course({
        id: '5',
        typeId: 1,
        releaseDate: datemin,
        title: "Concurrency in high demanding services",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 500,
        totalViews: '130K',
        totalVacancies: 1000
    }),
    new Course({
        id: '6',
        typeId: 5,
        releaseDate: datemin,
        title: "Node Js for API Development",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 67,
        totalViews: '130K',
        totalVacancies: 100
    }),
    new Course({
        id: '6',
        typeId: 5,
        releaseDate: date,
        title: "Node Js for API Development",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 67,
        totalViews: '130K',
        totalVacancies: 100
    }),
    new Course({
        id: '7',
        typeId: 2,
        releaseDate: date,
        title: "Advanced Data Structures",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 67,
        totalViews: '130K',
        totalVacancies: 100
    }),
    new Course({
        id: '8',
        typeId: 2,
        releaseDate: date,
        title: "Advanced Algorithms",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 67,
        totalViews: '130K',
        totalVacancies: 100
    }),
    new Course({
        id: '9',
        typeId: 3,
        releaseDate: datemax,
        title: "Patterns for Distributed Concurrency",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 12000,
        totalSubscriptions: 67,
        totalViews: '90K',
        totalVacancies: 100
    }),
    new Course({
        id: '10',
        typeId: 1,
        releaseDate: datemin,
        title: "Object Oriented Programming: The SOLID Principles",
        subscriptionCost: 10,
        status: CourseStatus.Live,
        totalEarned: 15000,
        totalSubscriptions: 200,
        totalViews: '80K',
        totalVacancies: 600
    })
]

export default CoursesData