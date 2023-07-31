import { Employee } from "./employee";

export class ExpenseReport  {
    id?: number;
    billingDate?: Date;
    feeType?: FeeType;
    amount?:number;
    currency?:Currency;
    customerBilling?: boolean;
    requestStatus?: RequestStatus
    createDate?: Date;
    comment?: string;
    employee?:Employee;
    justificationDoc?: string;
    
}

export enum RequestStatus{
    VALIDATED = 'VALIDATED',
    REJECTED = 'REJECTED', 
    PENDING = 'PENDING'

  }

  export enum FeeType{
    TRANSPORT = 'TRANSPORT',
    ACCOMODATION = 'ACCOMODATION', 
    FUEL = 'FUEL',
    MEALS = 'MEALS', 
    PHONE = 'PHONE', 
    LEISURE = 'LEISURE', 
    CLIENT_INVITATION = 'CLIENT_INVITATION', 
    OTHER = 'OTHER'
  }

  export enum Currency {
    AFN = 'AFN',
    AMD = 'AMD',
    AUD = 'AUD',
    BSD = 'BSD',
    BBD = 'BBD',
    BZD = 'BZD',
    BMD = 'BMD',
    BND = 'BND',
    BIF = 'BIF',
    KHR = 'KHR',
    CAD = 'CAD',
    CVE = 'CVE',
    KYD = 'KYD',
    XAF = 'XAF',
    XPF = 'XPF',
    CLP = 'CLP',
    CNY = 'CNY',
    COP = 'COP',
    KMF = 'KMF',
    CRC = 'CRC',
    HRK = 'HRK',
    CZK = 'CZK',
    DKK = 'DKK',
    DJF = 'DJF',
    DOP = 'DOP',
    EGP = 'EGP',
    ETB = 'ETB',
    EUR = 'EUR',
    FKP = 'FKP',
    FJD = 'FJD',
    GMD = 'GMD',
    GEL = 'GEL',
    GHS = 'GHS',
    GIP = 'GIP',
    GTQ = 'GTQ',
    GNF = 'GNF',
    GYD = 'GYD',
    HTG = 'HTG',
    HNL = 'HNL',
    HKD = 'HKD',
    HUF = 'HUF',
    ISK = 'ISK',
    INR = 'INR',
    IDR = 'IDR',
    IRR = 'IRR',
    IQD = 'IQD',
    ILS = 'ILS',
    JPY = 'JPY',
    JOD = 'JOD',
    KZT = 'KZT',
    KES = 'KES',
    KWD = 'KWD',
    LAK = 'LAK',
    LBP = 'LBP',
    LRD = 'LRD',
    MGA = 'MGA',
    MWK = 'MWK',
    MYR = 'MYR',
    MUR = 'MUR',
    MXN = 'MXN',
    MDL = 'MDL',
    MNT = 'MNT',
    MAD = 'MAD',
    MZN = 'MZN',
    MMK = 'MMK',
    NAD = 'NAD',
    NPR = 'NPR',
    ANG = 'ANG',
    NZD = 'NZD',
    NIO = 'NIO',
    NGN = 'NGN',
    NOK = 'NOK',
    OMR = 'OMR',
    PKR = 'PKR',
    PAB = 'PAB',
    PGK = 'PGK',
    PYG = 'PYG',
    PEN = 'PEN',
    PHP = 'PHP',
    PLN = 'PLN',
    QAR = 'QAR',
    RON = 'RON',
    RUB = 'RUB',
    RWF = 'RWF',
    SHP = 'SHP',
    SVC = 'SVC',
    SAR = 'SAR',
    RSD = 'RSD',
    SCR = 'SCR',
    SLL = 'SLL',
    SGD = 'SGD',
    SOS = 'SOS',
    ZAR = 'ZAR',
    KRW = 'KRW',
    SSP = 'SSP',
    LKR = 'LKR',
    SDG = 'SDG',
    SRD = 'SRD',
    SZL = 'SZL',
    SEK = 'SEK',
    CHF = 'CHF',
    SYP = 'SYP',
    TWD = 'TWD',
    TZS = 'TZS',
    THB = 'THB',
    TOP = 'TOP',
    TTD = 'TTD',
    TND = 'TND',
    TRY = 'TRY',
    TMT = 'TMT',
    AED = 'AED',
    UGX = 'UGX',
    UAH = 'UAH',
    UYU = 'UYU',
    UZS = 'UZS',
    VUV = 'VUV',
    VEF = 'VEF',
    VND = 'VND',
    XOF = 'XOF',
    YER = 'YER',
    ZMW = 'ZMW',
    ZWL = 'ZWL',
  }
