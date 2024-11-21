import { LogLevel, LoggerOptions } from '@pavelglaz/types'

export const defaultOptions: LoggerOptions = {
    logLevel: LogLevel.INFO,
    maxArrayLength: 100,
    maxStringLength: 255,
    endLengthToLog: 10,
    maxObjectDepth: 8,
    maxObjectBreadth: 50,
    redact: {
        fields: new Set([
            'inn',
            'itn',
            'client',
            'firstName',
            'lastName',
            'middleName',
            'firstname',
            'lastname',
            'middlename',
            'first_name',
            'last_name',
            'middle_name',
            'passportSeries',
            'passportNumber',
            'email',
            'addressOfRegistration',
            'addressOfBirth',
            'birthDay',
            'birthday',
            'fio',
            'passport',
            'phone',
            'address',
            'birthplace',
            'fullName',
            'full_name',
            'phoneNumber',
            'extraPhoneNumber',
            'refreshToken',
            'token',
            'fName',
            'lName',
            'mName',
            'DocNumberDRFO',
            'GivenName',
            'PatronymicName',
            'FamilyName',
            'surname',
            'patronymic',
            'rnokpp',
            'document',
            'firstNameUA',
            'lastNameUA',
            'middleNameUA',
            'serialNumber',
            'department',
            'departmentUA',
            'departmentEN',
            'birthPlaceUA',
            'birthPlaceEN',
            'recordNumber',
            'firstNameEN',
            'lastNameEN',
            'docNumber',
            'documentRegistrationPlaceUA',
            'currentRegistrationPlaceUA',
            'registrationPlace',
            'birthDate',
            'categories',
            'photo',
            'sign',
            'docIdentity',
            'collegeName',
            'facultyName',
            'educationType',
            'vehicleLicenseId',
            'website',
            'vin',
            'licensePlate',
            'dateReg',
            'dateFirstReg',
            'number',
            'residenceRegistrationPlace',
        ]),
        paths: new Set([]),
        fieldsToRedactFullname: new Set(['value', 'name', 'title', 'creditors', 'pay_text', 'order_description']),
    },
}
