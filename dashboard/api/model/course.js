class Course {
    constructor(course) {
        if (!course) return

        this.id = course.id,
        this.typeId = course.typeId,
        this.releaseDate = course.releaseDate,
        this.title = course.title,
        this.subscriptionCost = course.subscriptionCost,
        this.status = course.status,
        this.totalEarned = course.totalEarned,
        this.totalSubscriptions = course.totalSubscriptions,
        this.totalViews = course.totalViews,
        this.totalVacancies = course.totalVacancies
    }
}

export default Course