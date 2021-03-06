import React, { Component } from 'react';

import ButtonInCard from './ButtonInCard'

const getTags = (tags) => {
    const tagList = tags.split(',');
    return tagList;
}


const Card = ({ props }) => {
    const { id, course_name, author, thumbnail_url, url, description, tags, is_favorite } = props;

    return (
        <div className="course-card position-relative ">
            <a className="img-course" href={url} target="_blank">
                <img src={thumbnail_url} alt="Course Image" />
            </a>
            <div className="tag-list">
                <ul className="d-flex flex-wrap mt-1 mx-auto">
                    {getTags(tags).map((tag) => (
                        <li key={tag} >
                            <a href="">{tag}</a>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div className="course-name">{course_name}</div>
            <div className="author">by <span className="author-name">{author}</span></div>
            <div className="description">
                <p>{description}</p>
            </div>
            <ButtonInCard courseID={id} courseURL={url} isFavoriteID={is_favorite} />
        </div>

    )
}

const CourseCard = ({ allCourses }) => (
    <div className="d-flex justify-content-center align-items-center pb-2">
        <div className="container grid-view justify-content-center">
            {allCourses.map((course, index) => (
                <Card key={index} props={course} />
            ))}
        </div>
    </div >
)


export default CourseCard;
