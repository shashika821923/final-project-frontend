import axios from 'axios';
import { config } from 'configs/endpoints';

export const userInfoService = {
    addNewUserAccount,
    loginUser,
    getAllUsers,
    getUser,
    updateUSer,
    deleteUser,
    newMemberShipRequets,
    acceptUser
};

function addNewUserAccount(newUserInformation) {
    return axios.post(`${config.api.endpoint}/users/addNewUser`, newUserInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function loginUser(userInformation) {
    return axios.post(`${config.api.endpoint}/users/login`, userInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function getAllUsers(userInformation) {
    return axios.post(`${config.api.endpoint}/users/allUsers`, userInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function getUser(userInformation) {
    return axios.post(`${config.api.endpoint}/users/getUser`, userInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function updateUSer(userInformation) {
    return axios.post(`${config.api.endpoint}/users/updateUser`, userInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function deleteUser(userInformation) {
    return axios.post(`${config.api.endpoint}/users/deleteUser`, userInformation).then(
        (data) => data,
        (error) => console.log(error));
}

function newMemberShipRequets() {
    return axios.post(`${config.api.endpoint}/users/newMembersList`,).then(
        (data) => data,
        (error) => console.log(error));
}

function acceptUser(userid) {
    return axios.post(`${config.api.endpoint}/users/acceptUser`, userid).then(
        (data) => data,
        (error) => console.log(error));
}


export const appointmentServices = {
    addNewAppointment,
    getAllAppointments,
    getAppointment,
    updateAppointment,
    completeAppointment,
    approveAppointment,
    deleteAppointment
}

function addNewAppointment(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/appointments/addAppointment`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}

function getAllAppointments(filters) {
    return axios.post(`${config.api.endpoint}/appointments/getAllAppointments`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function getAppointment(appointmentId) {
    return axios.post(`${config.api.endpoint}/appointments/getAppointment`, appointmentId).then(
        (data) => data,
        (error) => console.log(error));
}

function updateAppointment(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/appointments/updateAppointment`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}

function completeAppointment(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/appointments/completeAppointment`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}


function approveAppointment(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/appointments/approveAppointment`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}

function deleteAppointment(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/appointments/deleteAppointment`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}


export const blogPostService = {
    addNewBlogPost,
    getAllBlogPosts
}


function addNewBlogPost(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/blogging/addBlogPost`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}

function getAllBlogPosts(appointmentDetails) {
    return axios.post(`${config.api.endpoint}/blogging/getAllBlogs`, appointmentDetails).then(
        (data) => data,
        (error) => console.log(error));
}

export const attendanceServices = {
    getFilteredAttendancesList
}


function getFilteredAttendancesList(filters) {
    return axios.post(`${config.api.endpoint}/attendance/getAllAttendance`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

export const emailPromotions = {
    sendPromoEmails
}

function sendPromoEmails(filters) {
    return axios.post(`${config.api.endpoint}/promotions/promotionSend`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

