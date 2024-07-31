// router.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainHome1 from './pages/MainHome1';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Train from "./pages/train"
import Kakaologin from './components/Common/Kakaologin';
import KakaoCallback from './components/Common/KakaoCallback'
import CourseMake from './pages/CourseMake';
import ProtectedRoute from './components/Common/ProtectRoute';
import TrainSearch from "./pages/TrainSearch"
import Test from "./pages/Test"
import OnlyRandom from "./pages/OnlyRandom"
import GoalTravel1 from "./pages/GoalTravel1"
import TestPage from "./pages/TestPage"
import DiaryMain from "./pages/DiaryMain"
import DiaryWrite from "./pages/DiaryWrite"
import DiaryDetail from "./pages/DiaryDetail"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "/main", element: <MainHome1 /> },
      { path: "/course", element: <ProtectedRoute element={<Course />} /> },
      { path: "/coursemake", element: <ProtectedRoute element={<CourseMake />} /> },
      { path: "/train", element: <ProtectedRoute element={<Train />} /> },
      { path: "/kakao", element: <Kakaologin /> },
      { path: "/kakao/login", element: <KakaoCallback /> },
      { path:"/map",element:<Map/>},,
      { path:"/trainsearch",element:<TrainSearch/>},
      { path:"/test",element:<Test/>},
      { path:"/random",element:<OnlyRandom/>},
      { path:"/goaltravel",element:<GoalTravel1/>},
      { path:"/testpage",element:<TestPage/>},
      { path:"/diarymain",element:<DiaryMain/>},
      { path:"/diarywrite",element:<DiaryWrite/>},
      { path:"/diarydetail",element:<DiaryDetail/>},
    ],
    errorElement: <NotFound />,
  },
]);
 
export default router;