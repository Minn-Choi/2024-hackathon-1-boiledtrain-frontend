import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'; // 추가: useLocation 훅 사용
import Head from "../components/Course/Head";
import Search from "../components/Course/Search";
import Select from "../components/Course/Select";
import CourseMake from "../components/map/CourseMake";
import CourseContent from "../components/coursetrain/CourseContent";
import CourseContentLike from "../components/coursetrain/CourseContentLike";
import CourseContentSharedFast from "../components/coursetrain/CourseContentSharedFast";
import CourseContentShaedLike from "../components/coursetrain/CourseContentShaedLike";
import CourseDetail from "../components/coursetrain/CourseDetail";
import BottomBar from "../components/Common/BottomBar";
import styled from "styled-components";

const StyledBottomBar = styled.div`
    position: absolute;
    bottom: 0px;
    width: 430px;
    height: 77px;
    background: #00ABFC;
    z-index: 200;
`;

const PageContainer = styled.div`
    position: relative;
    height: 873px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const Course = () => {
    const navigate = useNavigate();
    const location = useLocation(); // 추가: useLocation 훅 사용
    const [selected, setSelected] = useState(1);
    const [selected2, setSelected2] = useState(1);
    const [isCourseMakeVisible, setIsCourseMakeVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [coursePlaces, setCoursePlaces] = useState([]);
    const [selectedStation, setSelectedStation] = useState("");

    useEffect(() => {
        if (location.state?.courseId) { // 추가: location.state에서 courseId를 확인
            setSelectedCourse(location.state.courseId); // 전달받은 courseId를 selectedCourse에 설정
        }
    }, [location.state]); // location.state 의존성 추가

    const handleAddCourseClick = () => {
        setIsCourseMakeVisible(true);
        setEditingCourse(null);
        setIsEditMode(false);
    };

    const handleBackButtonClick = () => {
        setIsCourseMakeVisible(false);
        setEditingCourse(null);
        setSelectedCourse(null);
    };

    const handleSelect = (value) => {
        setSelected(value);
        if (value === 1) {
            setIsCourseMakeVisible(false);
        }
        if (selectedCourse) {
            setSelectedCourse(null);
        }
    };

    const handleSelect2 = (value) => {
        setSelected2(value);
        setSelectedStation(""); // Reset selectedStation when changing tabs
    };

    const handleCourseClick = (courseId) => {
        setSelectedCourse(courseId);
        setSelectedStation("");
    };

    const handleCloseDetail = () => {
        setSelectedCourse(null);
    };

    const handleEditCourse = (courseId) => {
        setEditingCourse(courseId);
        setIsCourseMakeVisible(true);
        setSelectedCourse(null);
        setIsEditMode(true);
    };

    return (
        <PageContainer>
            <Head 
                selected={selected} 
                onSelect={handleSelect}
            />
            {!isCourseMakeVisible && !selectedCourse && (
                <>
                    <Search 
                        selected={selected} 
                        onAddCourseClick={handleAddCourseClick}
                        setSelectedStation={setSelectedStation}
                    />
                    <Select 
                        selected={selected} 
                        selected2={selected2} 
                        onSelect2={handleSelect2} // Use updated handleSelect2 here
                    />
                    {selected === 1 && selected2 === 1 && <CourseContentShaedLike onCourseClick={handleCourseClick}  
                        selectedStation={selectedStation} />}
                    {/* 전체 코스 인기순 */}
                    {selected === 1 && selected2 === 2 && <CourseContentSharedFast onCourseClick={handleCourseClick}  
                        selectedStation={selectedStation} />}
                    {/* 전체 코스 최신순 */}
                    {selected === 2 && selected2 === 1 && <CourseContentLike onCourseClick={handleCourseClick} />}
                    {/* 내 코스 좋아요 누른거 */}
                    
                    {selected === 2 && selected2 === 2 && <CourseContent 
                        onCourseClick={handleCourseClick}
                    />}
                    {/* 내 코스 내가 만든거 */}
                </>
            )}
            {isCourseMakeVisible && (
                <CourseMake 
                    course={editingCourse} 
                    onBackButtonClick={handleBackButtonClick} 
                    isEditMode={isEditMode}
                    coursePlaces={coursePlaces}
                />
            )}
            {selectedCourse && !isCourseMakeVisible && (
                <CourseDetail 
                    courseId={selectedCourse} 
                    onClose={handleCloseDetail} 
                    onEditCourse={handleEditCourse} 
                />
            )}
            <StyledBottomBar>
                <BottomBar />
            </StyledBottomBar>
        </PageContainer>
    );
}

export default Course;
