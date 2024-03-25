// ** React Imports
import React, { lazy, Suspense } from 'react';

// ** Router Components
import { BrowserRouter as AppRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import Feedback from "../views/Feedback";
import Home from "../views/Home";
import Reports from '../views/Reports';
import HolidayHours from '../views/Holiday Hours';
import Marketing from '../views/Marketing';
import PreparationTime from '../views/PreparationTime';
import Users from '../views/Users';
import Documents from '../views/Documents';
import Settings from '../views/Settings';

const Error = lazy(() => import('../views/Error'));

const Router: React.FC = () => {
    return (
        <AppRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Error />} />

                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/reports" element={<Reports/>} />
                        <Route path="/holiday_hours" element={<HolidayHours/>} />
                        <Route path="/marketing" element={<Marketing/>} />
                        <Route path="/preparation_time" element={<PreparationTime/>} />
                        <Route path="/users" element={<Users/>} />
                        <Route path="/documents" element={<Documents/>} />
                        <Route path="/settings" element={<Settings/>} />
                    </Route>
                </Routes>
            </Suspense>
        </AppRouter>
    );
};

export default Router;
