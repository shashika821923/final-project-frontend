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
    sendPromoEmails,
    saveReview,
    getAllReviews
}

function sendPromoEmails(filters) {
    return axios.post(`${config.api.endpoint}/promotions/promotionSend`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function saveReview(filters) {
    return axios.post(`${config.api.endpoint}/promotions/addreview`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function getAllReviews(filters) {
    return axios.post(`${config.api.endpoint}/promotions/getAllReviews`, filters).then(
        (data) => data,
        (error) => console.log(error));
}


export const payments = {
    addNewPayments,
    getPaymentsByUserId,
    notifyPayments
}

function addNewPayments(filters) {
    return axios.post(`${config.api.endpoint}/payments/addPayment`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function notifyPayments(filters) {
    return axios.post(`${config.api.endpoint}/payments/notifyPayments`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function getPaymentsByUserId(filters) {
    return axios.post(`${config.api.endpoint}/payments/getPayments`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

export const equipmentServices = {
    addNewEquipment,
    getAllEquipments,
    updateEquipment,
    getEquipment,
    deleteEquipment
}


function addNewEquipment(filters) {
    return axios.post(`${config.api.endpoint}/equipments/addEquipment`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function getAllEquipments(filters) {
    return axios.post(`${config.api.endpoint}/equipments/getAll`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function updateEquipment(filters) {
    return axios.post(`${config.api.endpoint}/equipments/updateEquipment`, filters).then(
        (data) => data,
        (error) => console.log(error));
}

function getEquipment(filters) {
    return axios.post(`${config.api.endpoint}/equipments/getEquipment`, filters).then(
        (data) => data,
        (error) => console.log(error));
}


function deleteEquipment(filters) {
    return axios.post(`${config.api.endpoint}/equipments/deleteEquipment`, filters).then(
        (data) => data,
        (error) => console.log(error));
}


