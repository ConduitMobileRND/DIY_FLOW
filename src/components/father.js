import React, { Component } from 'react';
import jQuery from 'jquery';
import Validator from 'validator';
import { FormBase } from 'react-serial-forms';
import lodash from 'lodash';

import Fetch from '../utils/fetch/fetch';
import ValidateMe from '../utils/validateMe/validateMe';

import Home from "./home";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import AutoComplete from './generalComponents/autocomplete';
import animate from '../styles/animate.min.css';

import HPBgImage1 from './home/images/hpBg1.jpg';
import HPBgImage2 from './home/images/hpBg2.jpg';
import HPBgImage3 from './home/images/hpBg3.jpg';
import HPBgImage4 from './home/images/hpBg4.jpg';

const areaCodeOptions = [{"id":"Israel","value":"972","code":"IL"},{"id":"Afghanistan","value":"93","code":"AF"},{"id":"Albania","value":"355","code":"AL"},{"id":"Algeria","value":"213","code":"DZ"},{"id":"AmericanSamoa","value":"1684","code":"AS"},{"id":"Andorra","value":"376","code":"AD"},{"id":"Angola","value":"244","code":"AO"},{"id":"Anguilla","value":"1264","code":"AI"},{"id":"Antigua and Barbuda","value":"1268","code":"AG"},{"id":"Argentina","value":"54","code":"AR"},{"id":"Armenia","value":"374","code":"AM"},{"id":"Aruba","value":"297","code":"AW"},{"id":"Australia","value":"61","code":"AU"},{"id":"Austria","value":"43","code":"AT"},{"id":"Azerbaijan","value":"994","code":"AZ"},{"id":"Bahamas","value":"1242","code":"BS"},{"id":"Bahrain","value":"973","code":"BH"},{"id":"Bangladesh","value":"880","code":"BD"},{"id":"Barbados","value":"1246","code":"BB"},{"id":"Belarus","value":"375","code":"BY"},{"id":"Belgium","value":"32","code":"BE"},{"id":"Belize","value":"501","code":"BZ"},{"id":"Benin","value":"229","code":"BJ"},{"id":"Bermuda","value":"1441","code":"BM"},{"id":"Bhutan","value":"975","code":"BT"},{"id":"Bosnia and Herzegovina","value":"387","code":"BA"},{"id":"Botswana","value":"267","code":"BW"},{"id":"Brazil","value":"55","code":"BR"},{"id":"British Indian Ocean Territory","value":"246","code":"IO"},{"id":"Bulgaria","value":"359","code":"BG"},{"id":"Burkina Faso","value":"226","code":"BF"},{"id":"Burundi","value":"257","code":"BI"},{"id":"Cambodia","value":"855","code":"KH"},{"id":"Cameroon","value":"237","code":"CM"},{"id":"Canada","value":"1","code":"CA"},{"id":"Cape Verde","value":"238","code":"CV"},{"id":"Cayman Islands","value":" 345","code":"KY"},{"id":"Central African Republic","value":"236","code":"CF"},{"id":"Chad","value":"235","code":"TD"},{"id":"Chile","value":"56","code":"CL"},{"id":"China","value":"86","code":"CN"},{"id":"Christmas Island","value":"61","code":"CX"},{"id":"Colombia","value":"57","code":"CO"},{"id":"Comoros","value":"269","code":"KM"},{"id":"Congo","value":"242","code":"CG"},{"id":"Cook Islands","value":"682","code":"CK"},{"id":"Costa Rica","value":"506","code":"CR"},{"id":"Croatia","value":"385","code":"HR"},{"id":"Cuba","value":"53","code":"CU"},{"id":"Cyprus","value":"537","code":"CY"},{"id":"Czech Republic","value":"420","code":"CZ"},{"id":"Denmark","value":"45","code":"DK"},{"id":"Djibouti","value":"253","code":"DJ"},{"id":"Dominica","value":"1767","code":"DM"},{"id":"Dominican Republic","value":"1849","code":"DO"},{"id":"Ecuador","value":"593","code":"EC"},{"id":"Egypt","value":"20","code":"EG"},{"id":"El Salvador","value":"503","code":"SV"},{"id":"Equatorial Guinea","value":"240","code":"GQ"},{"id":"Eritrea","value":"291","code":"ER"},{"id":"Estonia","value":"372","code":"EE"},{"id":"Ethiopia","value":"251","code":"ET"},{"id":"Faroe Islands","value":"298","code":"FO"},{"id":"Fiji","value":"679","code":"FJ"},{"id":"Finland","value":"358","code":"FI"},{"id":"France","value":"33","code":"FR"},{"id":"French Guiana","value":"594","code":"GF"},{"id":"French Polynesia","value":"689","code":"PF"},{"id":"Gabon","value":"241","code":"GA"},{"id":"Gambia","value":"220","code":"GM"},{"id":"Georgia","value":"995","code":"GE"},{"id":"Germany","value":"49","code":"DE"},{"id":"Ghana","value":"233","code":"GH"},{"id":"Gibraltar","value":"350","code":"GI"},{"id":"Greece","value":"30","code":"GR"},{"id":"Greenland","value":"299","code":"GL"},{"id":"Grenada","value":"1473","code":"GD"},{"id":"Guadeloupe","value":"590","code":"GP"},{"id":"Guam","value":"1671","code":"GU"},{"id":"Guatemala","value":"502","code":"GT"},{"id":"Guinea","value":"224","code":"GN"},{"id":"Guinea-Bissau","value":"245","code":"GW"},{"id":"Guyana","value":"595","code":"GY"},{"id":"Haiti","value":"509","code":"HT"},{"id":"Honduras","value":"504","code":"HN"},{"id":"Hungary","value":"36","code":"HU"},{"id":"Iceland","value":"354","code":"IS"},{"id":"India","value":"91","code":"IN"},{"id":"Indonesia","value":"62","code":"ID"},{"id":"Iraq","value":"964","code":"IQ"},{"id":"Ireland","value":"353","code":"IE"},{"id":"Italy","value":"39","code":"IT"},{"id":"Jamaica","value":"1876","code":"JM"},{"id":"Japan","value":"81","code":"JP"},{"id":"Jordan","value":"962","code":"JO"},{"id":"Kazakhstan","value":"7 7","code":"KZ"},{"id":"Kenya","value":"254","code":"KE"},{"id":"Kiribati","value":"686","code":"KI"},{"id":"Kuwait","value":"965","code":"KW"},{"id":"Kyrgyzstan","value":"996","code":"KG"},{"id":"Latvia","value":"371","code":"LV"},{"id":"Lebanon","value":"961","code":"LB"},{"id":"Lesotho","value":"266","code":"LS"},{"id":"Liberia","value":"231","code":"LR"},{"id":"Liechtenstein","value":"423","code":"LI"},{"id":"Lithuania","value":"370","code":"LT"},{"id":"Luxembourg","value":"352","code":"LU"},{"id":"Madagascar","value":"261","code":"MG"},{"id":"Malawi","value":"265","code":"MW"},{"id":"Malaysia","value":"60","code":"MY"},{"id":"Maldives","value":"960","code":"MV"},{"id":"Mali","value":"223","code":"ML"},{"id":"Malta","value":"356","code":"MT"},{"id":"Marshall Islands","value":"692","code":"MH"},{"id":"Martinique","value":"596","code":"MQ"},{"id":"Mauritania","value":"222","code":"MR"},{"id":"Mauritius","value":"230","code":"MU"},{"id":"Mayotte","value":"262","code":"YT"},{"id":"Mexico","value":"52","code":"MX"},{"id":"Monaco","value":"377","code":"MC"},{"id":"Mongolia","value":"976","code":"MN"},{"id":"Montenegro","value":"382","code":"ME"},{"id":"Montserrat","value":"1664","code":"MS"},{"id":"Morocco","value":"212","code":"MA"},{"id":"Myanmar","value":"95","code":"MM"},{"id":"Namibia","value":"264","code":"NA"},{"id":"Nauru","value":"674","code":"NR"},{"id":"Nepal","value":"977","code":"NP"},{"id":"Netherlands","value":"31","code":"NL"},{"id":"Netherlands Antilles","value":"599","code":"AN"},{"id":"New Caledonia","value":"687","code":"NC"},{"id":"New Zealand","value":"64","code":"NZ"},{"id":"Nicaragua","value":"505","code":"NI"},{"id":"Niger","value":"227","code":"NE"},{"id":"Nigeria","value":"234","code":"NG"},{"id":"Niue","value":"683","code":"NU"},{"id":"Norfolk Island","value":"672","code":"NF"},{"id":"Northern Mariana Islands","value":"1670","code":"MP"},{"id":"Norway","value":"47","code":"NO"},{"id":"Oman","value":"968","code":"OM"},{"id":"Pakistan","value":"92","code":"PK"},{"id":"Palau","value":"680","code":"PW"},{"id":"Panama","value":"507","code":"PA"},{"id":"Papua New Guinea","value":"675","code":"PG"},{"id":"Paraguay","value":"595","code":"PY"},{"id":"Peru","value":"51","code":"PE"},{"id":"Philippines","value":"63","code":"PH"},{"id":"Poland","value":"48","code":"PL"},{"id":"Portugal","value":"351","code":"PT"},{"id":"Puerto Rico","value":"1939","code":"PR"},{"id":"Qatar","value":"974","code":"QA"},{"id":"Romania","value":"40","code":"RO"},{"id":"Rwanda","value":"250","code":"RW"},{"id":"Samoa","value":"685","code":"WS"},{"id":"San Marino","value":"378","code":"SM"},{"id":"Saudi Arabia","value":"966","code":"SA"},{"id":"Senegal","value":"221","code":"SN"},{"id":"Serbia","value":"381","code":"RS"},{"id":"Seychelles","value":"248","code":"SC"},{"id":"Sierra Leone","value":"232","code":"SL"},{"id":"Singapore","value":"65","code":"SG"},{"id":"Slovakia","value":"421","code":"SK"},{"id":"Slovenia","value":"386","code":"SI"},{"id":"Solomon Islands","value":"677","code":"SB"},{"id":"South Africa","value":"27","code":"ZA"},{"id":"South Georgia and the South Sandwich Islands","value":"500","code":"GS"},{"id":"Spain","value":"34","code":"ES"},{"id":"Sri Lanka","value":"94","code":"LK"},{"id":"Sudan","value":"249","code":"SD"},{"id":"Suriname","value":"597","code":"SR"},{"id":"Swaziland","value":"268","code":"SZ"},{"id":"Sweden","value":"46","code":"SE"},{"id":"Switzerland","value":"41","code":"CH"},{"id":"Tajikistan","value":"992","code":"TJ"},{"id":"Thailand","value":"66","code":"TH"},{"id":"Togo","value":"228","code":"TG"},{"id":"Tokelau","value":"690","code":"TK"},{"id":"Tonga","value":"676","code":"TO"},{"id":"Trinidad and Tobago","value":"1868","code":"TT"},{"id":"Tunisia","value":"216","code":"TN"},{"id":"Turkey","value":"90","code":"TR"},{"id":"Turkmenistan","value":"993","code":"TM"},{"id":"Turks and Caicos Islands","value":"1649","code":"TC"},{"id":"Tuvalu","value":"688","code":"TV"},{"id":"Uganda","value":"256","code":"UG"},{"id":"Ukraine","value":"380","code":"UA"},{"id":"United Arab Emirates","value":"971","code":"AE"},{"id":"United Kingdom","value":"44","code":"GB"},{"id":"United States","value":"1","code":"US"},{"id":"Uruguay","value":"598","code":"UY"},{"id":"Uzbekistan","value":"998","code":"UZ"},{"id":"Vanuatu","value":"678","code":"VU"},{"id":"Wallis and Futuna","value":"681","code":"WF"},{"id":"Yemen","value":"967","code":"YE"},{"id":"Zambia","value":"260","code":"ZM"},{"id":"Zimbabwe","value":"263","code":"ZW"},{"id":"land Islands","value":"","code":"AX"},{"id":"Antarctica","value":null,"code":"AQ"},{"id":"Bolivia, Plurinational State of","value":"591","code":"BO"},{"id":"Brunei Darussalam","value":"673","code":"BN"},{"id":"Cocos (Keeling) Islands","value":"61","code":"CC"},{"id":"Congo, The Democratic Republic of the","value":"243","code":"CD"},{"id":"Cote d'Ivoire","value":"225","code":"CI"},{"id":"Falkland Islands (Malvinas)","value":"500","code":"FK"},{"id":"Guernsey","value":"44","code":"GG"},{"id":"Holy See (Vatican City State)","value":"379","code":"VA"},{"id":"Hong Kong","value":"852","code":"HK"},{"id":"Iran, Islamic Republic of","value":"98","code":"IR"},{"id":"Isle of Man","value":"44","code":"IM"},{"id":"Jersey","value":"44","code":"JE"},{"id":"Korea, Democratic People's Republic of","value":"850","code":"KP"},{"id":"Korea, Republic of","value":"82","code":"KR"},{"id":"Lao People's Democratic Republic","value":"856","code":"LA"},{"id":"Libyan Arab Jamahiriya","value":"218","code":"LY"},{"id":"Macao","value":"853","code":"MO"},{"id":"Macedonia, The Former Yugoslav Republic of","value":"389","code":"MK"},{"id":"Micronesia, Federated States of","value":"691","code":"FM"},{"id":"Moldova, Republic of","value":"373","code":"MD"},{"id":"Mozambique","value":"258","code":"MZ"},{"id":"Palestinian Territory, Occupied","value":"970","code":"PS"},{"id":"Pitcairn","value":"872","code":"PN"},{"id":"Réunion","value":"262","code":"RE"},{"id":"Russia","value":"7","code":"RU"},{"id":"Saint Barthélemy","value":"590","code":"BL"},{"id":"Saint Helena, Ascension and Tristan Da Cunha","value":"290","code":"SH"},{"id":"Saint Kitts and Nevis","value":"1869","code":"KN"},{"id":"Saint Lucia","value":"1758","code":"LC"},{"id":"Saint Martin","value":"590","code":"MF"},{"id":"Saint Pierre and Miquelon","value":"508","code":"PM"},{"id":"Saint Vincent and the Grenadines","value":"1784","code":"VC"},{"id":"Sao Tome and Principe","value":"239","code":"ST"},{"id":"Somalia","value":"252","code":"SO"},{"id":"Svalbard and Jan Mayen","value":"47","code":"SJ"},{"id":"Syrian Arab Republic","value":"963","code":"SY"},{"id":"Taiwan, Province of China","value":"886","code":"TW"},{"id":"Tanzania, United Republic of","value":"255","code":"TZ"},{"id":"Timor-Leste","value":"670","code":"TL"},{"id":"Venezuela, Bolivarian Republic of","value":"58","code":"VE"},{"id":"Viet Nam","value":"84","code":"VN"},{"id":"Virgin Islands, British","value":"1284","code":"VG"},{"id":"Virgin Islands, U.S.","value":"1340","code":"VI"}];
const businessCategories = [{id:"Select",value:"",text:"Select type"},
    {id:"Accessories",value:"1",text:"Accessories"},
    {id:"Bar & Alcohol",value:"2",text:"Bar & Alcohol"},
    {id:"Chinese Food",value:"3",text:"Chinese Food"},
    {id:"Fashion",value:"4",text:"Fashion"},
    {id:"Convenience Store",value:"5",text:"Convenience Store"},
    {id:"Restaurant",value:"6",text:"Restaurant"},
    {id:"Wine",value:"7",text:"Wine"},
    {id:"Pharma",value:"8",text:"Pharma"},
    {id:"Beauty & Cosmetics",value:"9",text:"Beauty & Cosmetics"},
    {id:"Coffee",value:"10",text:"Coffee"},
    {id:"Fast Food",value:"11",text:"Fast Food"},
    {id:"Optics",value:"12",text:"Optics"},
    {id:"Stores",value:"13",text:"Shoes"},
    {id:"Bakery",value:"14",text:"Bakery"},
    {id:"Deli",value:"15",text:"Deli"},
    {id:"Family",value:"16",text:"Family"},
    {id:"Sports",value:"17",text:"Sports"},
    {id:"Electronics",value:"19",text:"Electronics"},
    {id:"Other",value:"20",text:"Other"}];
const getUiThemesLink = "https://qa.keeprz.com/api/private/public/GetFacebookUIThemes";
const getFBImagesLink = "https://qa.keeprz.com/api/private/public/UploadFacebookImages";
const defaultThemes = {
        "status":"success",
        "data":[
            {"uipack_id":"294","constant_id":"294","uipack_name":"Bright Vanity Fair","location_id":null,"locationColor":"rgba(98, 191, 122, 1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(177, 206, 207, 0.85)","tileBackgroundColorTo":"rgba(212, 224, 224, 0.7)","tileInnerBackgroundColor":"rgba(208, 37, 82, 0.15)","pageHeaderBackgroundColorFrom":"rgba(177, 206, 207, 0.85)","pageHeaderBackgroundColorTo":"rgba(212, 224, 224, 0.7)","pageHeaderTextColor":"rgba(68, 68, 68, 1)","tileHeaderTextColor":"rgba(208, 37, 82, 1)","textColor":"rgba(68, 68, 68, 1)","listBackgroundColor":"rgba(212, 224, 224, 0.4)","listItemBackgroundColor":"rgba(255, 255, 255, 0.48)","tileBackgroundColor":"rgba(212, 224, 224, 0.45)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"295","constant_id":"295","uipack_name":"Dark Chinatown","location_id":null,"locationColor":"rgba(220, 62, 38, 1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(35,43,43,0.832)","tileBackgroundColorTo":"rgba(35,43,43,0.576)","tileInnerBackgroundColor":"rgba(140,149,148,0.128)","pageHeaderBackgroundColorFrom":"rgba(255,255,255,0.576)","pageHeaderBackgroundColorTo":"rgba(255,255,255,0.576)","pageHeaderTextColor":"rgba(255, 255, 255, 1)","tileHeaderTextColor":"rgba(227,174,86,1)","textColor":"rgba(255, 255, 255, 1)","listBackgroundColor":"rgba(220,62,38,0.256)","listItemBackgroundColor":"rgba(35,43,43,0.576)","tileBackgroundColor":"rgba(35,43,43,0.512)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"296","constant_id":"296","uipack_name":"Dark Ocean","location_id":null,"locationColor":"rgba(78,177,186,1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(34,41,48,0.832)","tileBackgroundColorTo":"rgba(34,41,48,0.576)","tileInnerBackgroundColor":"rgba(233,233,233,0.128)","pageHeaderBackgroundColorFrom":"rgba(34,41,48,0.832)","pageHeaderBackgroundColorTo":"rgba(34,41,48,0.832)","pageHeaderTextColor":"rgba(233,233,233,1)","tileHeaderTextColor":"rgba(78,177,186,1)","textColor":"rgba(233,233,233,1)","listBackgroundColor":"rgba(78,177,186,0.256)","listItemBackgroundColor":"rgba(34,41,48,0.68)","tileBackgroundColor":"rgba(34,41,48,0.512)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"297","constant_id":"297","uipack_name":"Bright Floral","location_id":null,"locationColor":"rgba(137,54,103,1)","negativeLocationColor":"rgba(245,244,235,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(245,244,235,0.79)","tileBackgroundColorTo":"rgba(245,244,235,0.748)","tileInnerBackgroundColor":"rgba(171,182,106,0.128)","pageHeaderBackgroundColorFrom":"rgba(245,244,235,0.952)","pageHeaderBackgroundColorTo":"rgba(245,244,235,0.74)","pageHeaderTextColor":"rgba(67,78,60,1)","tileHeaderTextColor":"rgba(137,54,103,1)","textColor":"rgba(67,78,60,1)","listBackgroundColor":" rgba(137,54,103,0.256)","listItemBackgroundColor":"rgba(245,244,235,0.748)","tileBackgroundColor":"rgba(245,244,235,0.576)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"298","constant_id":"298","uipack_name":"Bright Orange","location_id":null,"locationColor":"rgba(219, 88, 0, 1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(255, 255, 255, 0.9)","tileBackgroundColorTo":"rgba(255, 255, 255, 0.7)","tileInnerBackgroundColor":"rgba(219, 88, 0, 0.15)","pageHeaderBackgroundColorFrom":"rgba(255, 255, 255, 0.6)","pageHeaderBackgroundColorTo":"rgba(255, 255, 255, 0.6)","pageHeaderTextColor":"rgba(64, 64, 64, 1)","tileHeaderTextColor":"rgba(219, 88, 0, 1)","textColor":"rgba(64, 64, 64, 1)","listBackgroundColor":"rgba(219, 88, 0, 0.3)","listItemBackgroundColor":"rgba(255, 255, 255, 0.8)","tileBackgroundColor":"rgba(255, 255, 255, 0.5)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"309","constant_id":"309","uipack_name":"Bright Blues","location_id":null,"locationColor":"rgba(39,150,255, 1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(255, 255, 255, 0.9)","tileBackgroundColorTo":"rgba(255, 255, 255, 0.7)","tileInnerBackgroundColor":"rgba(39,150,255, 0.15)","pageHeaderBackgroundColorFrom":"rgba(255, 255, 255, 0.6)","pageHeaderBackgroundColorTo":"rgba(255, 255, 255, 0.6)","pageHeaderTextColor":"rgba(64, 64, 64, 1)","tileHeaderTextColor":"rgba(39,150,255, 1)","textColor":"rgba(64, 64, 64, 1)","listBackgroundColor":"rgba(39,150,255, 0.3)","listItemBackgroundColor":"rgba(255, 255, 255, 0.8)","tileBackgroundColor":"rgba(255, 255, 255, 0.5)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":null,"public":"1","version":"0"},
            {"uipack_id":"7434","constant_id":"7434","uipack_name":"Bright Spring","location_id":null,"locationColor":"rgba(96,151,82,225)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(255,255,255,0.79)","tileBackgroundColorTo":"rgba(255,255,255,0.47)","tileInnerBackgroundColor":"rgba(46,66,45,0.1)","pageHeaderBackgroundColorFrom":"rgba(255,255,255,0.57)","pageHeaderBackgroundColorTo":"rgba(255,255,255,0.53)","pageHeaderTextColor":"rgba(64,64,64,255)","tileHeaderTextColor":"rgba(64,64,64,255)","textColor":"rgba(64,64,64,255)","listBackgroundColor":"rgba(255,255,255,0.21)","listItemBackgroundColor":"rgba(255,255,255,0.46)","tileBackgroundColor":"rgba(255,255,255,0.47)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7436","constant_id":"7436","uipack_name":"","location_id":null,"locationColor":"rgba(201,0,0,1)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(0,0,0,0.7)","tileBackgroundColorTo":"rgba(0,0,0,0.51)","tileInnerBackgroundColor":"rgba(144,144,144,0.2)","pageHeaderBackgroundColorFrom":"rgba(0,0,0,0.63)","pageHeaderBackgroundColorTo":"rgba(80, 80, 80, 0.44)","pageHeaderTextColor":"rgba(255,255,255,1)","tileHeaderTextColor":"rgba(255,255,255,1)","textColor":"rgba(255,255,255,1)","listBackgroundColor":"rgba(0, 0, 0, 0.05)","listItemBackgroundColor":"rgba(0,0,0,0.49)","tileBackgroundColor":"rgba(0,0,0,0.52)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7437","constant_id":"7437","uipack_name":"","location_id":null,"locationColor":"rgba(160,136,102,1)","negativeLocationColor":"rgba(66,65,83,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(66,65,83,1)","tileBackgroundColorTo":"rgba(116,115,133,0.7)","tileInnerBackgroundColor":"rgba(51,44,33,0.67)","pageHeaderBackgroundColorFrom":"rgba(170,168,191,0.7)","pageHeaderBackgroundColorTo":"rgba(116,115,133,0.7)","pageHeaderTextColor":"rgba(227,227,227,1)","tileHeaderTextColor":"rgba(160,136,102,1)","textColor":"rgba(227,227,227,1)","listBackgroundColor":"rgba(160,136,102,0.79)","listItemBackgroundColor":"rgba(116,115,133,0.7)","tileBackgroundColor":"rgba(116,115,133,0.7)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7438","constant_id":"7438","uipack_name":"","location_id":null,"locationColor":"rgba(158,188,147,1)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(255,255,255,1)","tileBackgroundColorTo":"rgba(255,255,255,0.78)","tileInnerBackgroundColor":"rgba(195,174,120,0.56)","pageHeaderBackgroundColorFrom":"rgba(195,179,122,0.88)","pageHeaderBackgroundColorTo":"rgba(195,170,122,0.7)","pageHeaderTextColor":"rgba(0,0,0,1)","tileHeaderTextColor":"rgba(147,188,151,1)","textColor":"rgba(0,0,0,1)","listBackgroundColor":"rgba(147,186,188,0.1)","listItemBackgroundColor":"rgba(255,255,255,0.74)","tileBackgroundColor":"rgba(255,255,255,0.51)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7439","constant_id":"7439","uipack_name":"","location_id":null,"locationColor":"rgba(255,39,117,1)","negativeLocationColor":"rgba(255, 255, 255, 1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(255, 255, 255, 0.9)","tileBackgroundColorTo":"rgba(255, 255, 255, 0.7)","tileInnerBackgroundColor":"rgba(255,39,117,0.15)","pageHeaderBackgroundColorFrom":"rgba(255, 255, 255, 0.6)","pageHeaderBackgroundColorTo":"rgba(255, 255, 255, 0.6)","pageHeaderTextColor":"rgba(64, 64, 64, 1)","tileHeaderTextColor":"rgba(204,0,74,1)","textColor":"rgba(64, 64, 64, 1)","listBackgroundColor":"rgba(255,233,39,0.3)","listItemBackgroundColor":"rgba(255, 255, 255, 0.8)","tileBackgroundColor":"rgba(255, 255, 255, 0.5)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7441","constant_id":"7441","uipack_name":"","location_id":null,"locationColor":"rgba(248,255,173,1)","negativeLocationColor":"rgba(163,112,112,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(163,112,112,0.76)","tileBackgroundColorTo":"rgba(163,112,112,0.76)","tileInnerBackgroundColor":"rgba(163,112,112,0.76)","pageHeaderBackgroundColorFrom":"rgba(163,112,112,0.76)","pageHeaderBackgroundColorTo":"rgba(163,112,112,0.76)","pageHeaderTextColor":"rgba(255,255,255,1)","tileHeaderTextColor":"rgba(248,255,173,1)","textColor":"rgba(255,255,255,1)","listBackgroundColor":"rgba(255,227,82,0.24)","listItemBackgroundColor":"rgba(163,112,112,0.76)","tileBackgroundColor":"rgba(163,112,112,0.76)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7448","constant_id":"7448","uipack_name":"","location_id":null,"locationColor":"rgba(50,50,50,1)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(0,0,0,0.99)","tileBackgroundColorTo":"rgba(0,0,0,0.99)","tileInnerBackgroundColor":"rgba(0,0,0,1)","pageHeaderBackgroundColorFrom":"rgba(0,0,0,1)","pageHeaderBackgroundColorTo":"rgba(0,0,0,1)","pageHeaderTextColor":"rgba(255,255,255,1)","tileHeaderTextColor":"rgba(194,155,155,0.7)","textColor":"rgba(255,255,255,1)","listBackgroundColor":"rgba(209,134,134,0.5)","listItemBackgroundColor":"rgba(0,0,0,0.7)","tileBackgroundColor":"rgba(0,0,0,0.8)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14680","constant_id":"14680","uipack_name":"Lost and Found","location_id":"0","locationColor":"rgba(255,230,0,1)","negativeLocationColor":"rgba(84,39,51,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(198,213,205,0.85)","tileBackgroundColorTo":"rgba(198,213,205,0.85)","tileInnerBackgroundColor":"rgba(90,106,98,0.64)","pageHeaderBackgroundColorFrom":"rgba(84,39,51,1)","pageHeaderBackgroundColorTo":"rgba(84,39,51,1)","pageHeaderTextColor":"rgba(233,76,111,1)","tileHeaderTextColor":"rgba(233,76,111,1)","textColor":"rgba(84,39,51,1)","listBackgroundColor":"rgba(255,230,0,1)","listItemBackgroundColor":"rgba(198,213,205,1)","tileBackgroundColor":"rgba(90,106,98,0.81)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14681","constant_id":"14681","uipack_name":"Romantic Vintage","location_id":"0","locationColor":"rgba(217,78,103,1)","negativeLocationColor":"rgba(242,216,167,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(242,216,167,0.85)","tileBackgroundColorTo":"rgba(242,216,167,0.67)","tileInnerBackgroundColor":"rgba(166,133,114,0.55)","pageHeaderBackgroundColorFrom":"rgba(242,216,167,0.85)","pageHeaderBackgroundColorTo":"rgba(242,216,167,0.73)","pageHeaderTextColor":"rgba(217,78,103,1)","tileHeaderTextColor":"rgba(89,39,35,1)","textColor":"rgba(115,80,60,1)","listBackgroundColor":"rgba(217,78,103,1)","listItemBackgroundColor":"rgba(242,216,167,0.85)","tileBackgroundColor":"rgba(166,133,114,0.91)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14682","constant_id":"14682","uipack_name":"Papua New Guinea","location_id":"0","locationColor":"rgba(191,175,128,1)","negativeLocationColor":"rgba(89,50,60,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(38,1,38,0.9)","tileBackgroundColorTo":"rgba(38,1,38,0.83)","tileInnerBackgroundColor":"rgba(140,105,84,0.95)","pageHeaderBackgroundColorFrom":"rgba(89,50,60,1)","pageHeaderBackgroundColorTo":"rgba(89,50,60,1)","pageHeaderTextColor":"rgba(242,238,179,1)","tileHeaderTextColor":"rgba(242,238,179,1)","textColor":"rgba(191,175,128,1)","listBackgroundColor":"rgba(242,238,179,1)","listItemBackgroundColor":"rgba(38,1,38,0.9)","tileBackgroundColor":"rgba(38,1,38,0.9)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7771","constant_id":"7771","uipack_name":"","location_id":"0","locationColor":"rgba(0,0,0,1)","negativeLocationColor":"rgba(255,215,115,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(200,228,205,1)","tileBackgroundColorTo":"rgba(148,195,167,0.78)","tileInnerBackgroundColor":"rgba(0,190,171,0.43)","pageHeaderBackgroundColorFrom":"rgba(200,228,205,1)","pageHeaderBackgroundColorTo":"rgba(148,195,167,0.78)","pageHeaderTextColor":"rgba(0,0,0,1)","tileHeaderTextColor":"rgba(174,67,99,1)","textColor":"rgba(0,0,0,1)","listBackgroundColor":"rgba(255,89,105,1)","listItemBackgroundColor":"rgba(255,255,255,0.74)","tileBackgroundColor":"rgba(0,190,171,0.79)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7772","constant_id":"7772","uipack_name":"Facebook","location_id":"0","locationColor":"rgba(153,194,182,1)","negativeLocationColor":"rgba(104,83,63,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(51,41,31,0.96)","tileBackgroundColorTo":"rgba(51,41,31,0.79)","tileInnerBackgroundColor":"rgba(104,83,63,0.82)","pageHeaderBackgroundColorFrom":"rgba(51,41,31,1)","pageHeaderBackgroundColorTo":"rgba(51,41,31,1)","pageHeaderTextColor":"rgba(200,182,164,1)","tileHeaderTextColor":"rgba(255,244,232,1)","textColor":"rgba(200,182,164,1)","listBackgroundColor":"rgba(169,219,204,0.58)","listItemBackgroundColor":"rgba(51,41,31,0.79)","tileBackgroundColor":"rgba(104,83,63,0.82)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14761","constant_id":"0","uipack_name":"","location_id":"0","locationColor":"rgba(177,188,71,1)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(77,168,161,1)","tileBackgroundColorTo":"rgba(126,194,171,1)","tileInnerBackgroundColor":"rgba(255,255,255,0)","pageHeaderBackgroundColorFrom":"rgba(255,255,255,1)","pageHeaderBackgroundColorTo":"rgba(255,255,255,1)","pageHeaderTextColor":"rgba(177,188,71,1)","tileHeaderTextColor":"rgba(255,255,255,1)","textColor":"rgba(87,17,45,1)","listBackgroundColor":"rgba(168,33,89,1)","listItemBackgroundColor":"rgba(126,194,171,1)","tileBackgroundColor":"rgba(77,168,161,0.89)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14763","constant_id":"14763","uipack_name":"","location_id":"0","locationColor":"rgba(221,161,133,1)","negativeLocationColor":"rgba(255,255,255,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(171,51,52,0.93)","tileBackgroundColorTo":"rgba(171,51,52,0.87)","tileInnerBackgroundColor":"rgba(51,25,26,0.14)","pageHeaderBackgroundColorFrom":"rgba(232,209,165,1)","pageHeaderBackgroundColorTo":"rgba(232,209,165,1)","pageHeaderTextColor":"rgba(51,25,26,1)","tileHeaderTextColor":"rgba(237,219,183,1)","textColor":"rgba(51,25,26,1)","listBackgroundColor":"rgba(232,209,165,1)","listItemBackgroundColor":"rgba(171,51,52,0.93)","tileBackgroundColor":"rgba(171,51,52,0.93)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14764","constant_id":"14764","uipack_name":"","location_id":"0","locationColor":"rgba(174,157,150,1)","negativeLocationColor":"rgba(167,216,221,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(241,240,236,0.82)","tileBackgroundColorTo":"rgba(222,219,214,0.76)","tileInnerBackgroundColor":"rgba(250,241,182,0.76)","pageHeaderBackgroundColorFrom":"rgba(167,216,221,0.96)","pageHeaderBackgroundColorTo":"rgba(167,216,221,0.9)","pageHeaderTextColor":"rgba(28,28,28,1)","tileHeaderTextColor":"rgba(33,33,33,1)","textColor":"rgba(41,41,41,1)","listBackgroundColor":"rgba(250,241,182,0.76)","listItemBackgroundColor":"rgba(222,219,214,0.92)","tileBackgroundColor":"rgba(167,216,221,0.96)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"14765","constant_id":"14765","uipack_name":"","location_id":"0","locationColor":"rgba(122,110,36,1)","negativeLocationColor":"rgba(250,223,142,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(235,125,36,1)","tileBackgroundColorTo":"rgba(239,156,34,1)","tileInnerBackgroundColor":"rgba(140,105,84,0.95)","pageHeaderBackgroundColorFrom":"rgba(235,125,36,1)","pageHeaderBackgroundColorTo":"rgba(239,156,34,1)","pageHeaderTextColor":"rgba(242,238,179,1)","tileHeaderTextColor":"rgba(255,240,194,1)","textColor":"rgba(250,223,142,1)","listBackgroundColor":"rgba(122,110,36,1)","listItemBackgroundColor":"rgba(235,125,36,1)","tileBackgroundColor":"rgba(239,156,34,1)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"bright","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"3261","constant_id":"3261","uipack_name":"","location_id":null,"locationColor":"rgba(173,223,41,1)","negativeLocationColor":"rgba(0,0,0,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(34,41,48,0.832)","tileBackgroundColorTo":"rgba(34,41,48,0.576)","tileInnerBackgroundColor":"rgba(255,90,19,1)","pageHeaderBackgroundColorFrom":"rgba(34,41,48,0.832)","pageHeaderBackgroundColorTo":"rgba(34,41,48,0.832)","pageHeaderTextColor":"rgba(233,233,233,1)","tileHeaderTextColor":"rgba(41,190,223,1)","textColor":"rgba(233,233,233,1)","listBackgroundColor":"rgba(218,0,170,1)","listItemBackgroundColor":"rgba(34,41,48,0.68)","tileBackgroundColor":"rgba(34,41,48,0.512)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"},
            {"uipack_id":"7407","constant_id":"7407","uipack_name":"","location_id":null,"locationColor":"rgba(255,255,255,1)","negativeLocationColor":"rgba(163,140,112,1)","backgroundImageOverlayColor":"rgba(0,0,0,0)","tileBackgroundColorFrom":"rgba(163,140,112,1)","tileBackgroundColorTo":"rgba(163,140,112,1)","tileInnerBackgroundColor":"rgba(163,140,112,1)","pageHeaderBackgroundColorFrom":"rgba(163,140,112,1)","pageHeaderBackgroundColorTo":"rgba(163,140,112,1)","pageHeaderTextColor":"rgba(255,255,255,1)","tileHeaderTextColor":"rgba(255,255,255,1)","textColor":"rgba(255,255,255,1)","listBackgroundColor":"rgba(163,112,149,0.24)","listItemBackgroundColor":"rgba(163,140,112,1)","tileBackgroundColor":"rgba(163,140,112,0.75)","fontPrimary":"AlmoniDLAAA","fontPrimaryBold":"AlmoniDLAAA-Black","brightness":"dark","active":"0","source":"","public":"1","version":"0"}
        ],"code":200,"codeStatus":"OK"};

const defaultImgText = "Please add your text here";

let errorMessages = {
    email:{default:"Please provide a valid email address", duplicate:"User with this email address already exist"},
    store:{default:'Please provide a valid store name'}
};

class Father extends Component {
    constructor(props) {
        super(props);
        let defaultColor = "white";
        this.state = {
            data: {
                HPBackgrounds:{
                    currentKey: 0,
                    all:  [
                        HPBgImage1,
                        HPBgImage2,
                        HPBgImage3,
                        HPBgImage4
                    ]
                },
                form:{
                    email: {value: "", isValid: true},
                    store: {value:"", isValid: true},
                    facebook: {value: "", isValid: true},
                    areaCode: {value:this._getLocalCode(),isValid: true},
                    phoneLocal:{value:"", isValid:true},
                    website:{value:"",isValid:true},
                    category:{value:"", isValid:true},
                    businessAddress:{value:"", isValid:true},
                    info:{value:"", isValid:true},
                    addressDetails:{value:{
                        placeId:"",
                        lat:"",lng:""
                    }, isValid:true},
                    errorMessages:{
                        email:errorMessages.email.default,
                        store:errorMessages.store.default
                    },
                    options:{},
                    showFBOptions:true,
                    chosenFromFbOptions : false
                },
                fbData:{
                    about: "",
                    category: "",
                    id:"",
                    link:"",
                    location: {},
                    name:"",
                    picture:{},
                    website:""
                },
                fbUiThemes:[],
                schemes:[],
                phoneColors:{
                    upperColor: {defaultColor},
                    iconsColor: {defaultColor},
                    bgColor:{defaultColor},
                    brightness:"dark"
                },
                upperColorsSrc:"",
                iconsColorSrc:"",
                selectedScheme:"",
                paletteSelected: false,
                CPData:{
                    userId: "",
                    locationId: "",
                    token: "",
                    groupId: ""
                },
                defaultImages: [
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-marketing.como.com/images/site/2016/02/img4.jpg"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-marketing.como.com/images/site/2016/02/img5.jpg"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-marketing.como.com/images/site/2016/02/img1.jpg"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-marketing.como.com/images/site/2016/02/img2.jpg"},
                    {archive:null, category:"0", image_group: null,image_id:Math.floor(Math.random()*(900000) + 10000), location_id:"", public:"0",resource_id:null,resource_version:null, size:"original",source:"default", thumb:null, type:null, url:"http://static-marketing.como.com/images/site/2016/02/img3.jpg"},
                ],
                fbImages:[],
                allImages:[],
                selectedImages:[],
                imageOnScreen:"",
                selectedFromGalleryImageId:0,
                thumbGoTo:0,
                action: "initial",
                bgInterval: "",
                activePages:{
                    home: true,
                    step1: false,
                    step2: false,
                    step3:false
                }
            }
        };

        this._handleRegisterValidation = this._handleRegisterValidation.bind(this);
        this._handleFieldsValidation = this._handleFieldsValidation.bind(this);
        this._setData = this._setData.bind(this);
        this._handleBtnClick = this._handleBtnClick.bind(this);
        this._changeBg = this._changeBg.bind(this);
        this._stopBgAnimation = this._stopBgAnimation.bind(this);
        this._getLocalCode = this._getLocalCode.bind(this);
        this._handleGeoValidation = this._handleGeoValidation.bind(this);
        this._getLocationData = this._getLocationData.bind(this);
        this._isFBPageValid = this._isFBPageValid.bind(this);
        this._getUrl = this._getUrl.bind(this);
        this._setImages = this._setImages.bind(this);
    }
    _getUISchemes(){

        if(this.state.data.fbUiThemes == {}){
            return {};
        }
        let themeSchemes = [];
        let selectedThemeId= "";
        for(let i = 0; i < 3; i ++){
            if(typeof this.state.data.fbUiThemes != "undefined"){
                if(typeof this.state.data.fbUiThemes[i] != "undefined"){
                    themeSchemes.push(this.state.data.fbUiThemes[i]);
                    if(i == 0){
                        selectedThemeId = this.state.data.fbUiThemes[i].uipack_id;
                    }
                }else{
                    let ind = Math.floor(Math.random() * (defaultThemes.data.length + 1));
                    themeSchemes.push(defaultThemes.data[ind]);
                }
            }else{
                let ind = Math.floor(Math.random() * (defaultThemes.data.length + 1));
                themeSchemes.push(defaultThemes.data[ind]);
            }
        }
        return themeSchemes;
    }
    _getLocalCode(){
        /*TBD*/
        return "1";
    }
    _stopBgAnimation(){
        clearInterval(this.state.data.bgInterval);
    }

    _changeBg(){
       /* let animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        let allBgs = this.state.data.HPBackgrounds.all;
        this.state.data.HPBackgrounds.currentKey = this.state.data.HPBackgrounds.currentKey == allBgs.length-1 ? 0 :this.state.data.HPBackgrounds.currentKey + 1;
        this.setState({data:this.state.data});*/
    }

    _handleRegisterValidation(obj, props, e){
        //debugger;
        if(props.name == "email" && props.errorMsg == errorMessages.email.duplicate) {
            this.state.data.form.email.isValid = true;
            this.state.data.form.errorMessages.email = errorMessages.email.default;
            this._setData({data: this.state.data});
            return;
        }
        let validateTask = new ValidateMe();
        let isValid = validateTask.validateMe(props, e);
        if(typeof e != "undefined" && e.nativeEvent.type == "keyup" && isValid == false){
            return;
        }
        this.state.data.form[props.stateId].isValid = isValid;
        this.setState({data: this.state.data});
    }
    _handleFieldsValidation(props, e){
        //debugger;
         let isValid = true;
         let theValue = typeof e != "undefined" ? e.target.value.trim() : props.value.trim();
         if(!props.isRequired && theValue==""){
            isValid = true;
         }else if(props.isRequired && theValue == ""){
            isValid = false;
         }else {
            switch (props.validType) {
             case 'text':
                 isValid = true;
                break;
             case 'email':
                isValid = Validator.isEmail(theValue);
                break;
             case 'phone':
             case 'number':
                isValid = Validator.isNumeric(theValue);
                break;
             case 'url':
                isValid = Validator.isURL(theValue);
                break;
             case 'fb':
                return;
                break;
            }
        }
        if(props.validType != 'fb') {
            this.state.data.form[props.stateId].isValid = isValid;
            this.setState({data: this.state.data});
        }
    }
    _setData(obj, stateId, e){

        if(typeof e != "undefined") {
            let elem = e.target;
            if(elem.tagName == "SELECT"){
                if(jQuery(elem).val() != "")
                {
                    jQuery(elem).addClass("optionChosen");
                    this.state.data.form[stateId].isValid = true;
                }else{
                    jQuery(elem).removeClass("optionChosen");
                }
            }
            this.state.data.form[stateId].value = e.target.value;
            this.setState({data: this.state.data});
        }
    }

    _handleBtnClick(obj, action, event){
        this.state.data.action = action;
        event.preventDefault();
        if(this.state.data.action == "initial" || this.state.data.action == "register" || this.state.data.action == "sendForm") {
            let formValid = true;
            for (var key in obj) {
                // debugger;
                if (this.state.data.action == "register") {
                    this._handleRegisterValidation(null, obj[key].props);
                } else {
                    this._handleFieldsValidation(obj[key].props);
                }
            }
            if (this.state.data.action == "sendForm") {
                this._handleGeoValidation();
                if(!this.state.data.form.businessAddress.isValid){
                    formValid = false;
                }
            }
            let stateObj = this.state.data.form;
            for (var key in obj) {
                if (!stateObj[key].isValid) {
                    formValid = false;
                }
            }


            //console.log(formValid);
            if (!formValid) {
                if (this.state.data.action == "register") {
                    this.state.data.action = "initial";
                }
                formValid = true;
                return;
            }


        }
        let sendData = {};
        let sendMethod = "";
        let sendURL = "";
        switch(this.state.data.action){
            case "register":
                jQuery("input[name='email']").parents(".inputWrap").removeClass("error");
                jQuery(".home form .btnWrap button").html("<img src='images/ajax-loader1.gif'/>");
                sendData = {server: 3, displayName: this.state.data.form.store.value, email: this.state.data.form.email.value, app_lang: 1, phone_prefix: 1, timezone:'', ref:'diy'}
                sendMethod = "POST";
                sendURL = "https://qa.keeprz.com/api/private/public/Register";
                this._sendData(sendMethod, sendURL, sendData);
                break;
            case "sendForm":
                jQuery("#step1 form .btnWrap button").html("<img src='images/ajax-loader1.gif'/>");

                let getThemesUIData = {fburl: this.state.data.fbData.link,auth_location_id:this.state.data.CPData.locationId,auth_location_version:0, token: this.state.data.CPData.token}
                this._sendData("get",getUiThemesLink,getThemesUIData);

                let getDBImagesData = {fburl: this.state.data.fbData.link, auth_location_id:this.state.data.CPData.locationId,auth_location_version:0, token: this.state.data.CPData.token}
                this._sendData("get",getFBImagesLink,getDBImagesData);

                let locationData =  {data: {status:"success",code:200, codeStatus:"OK",
                    facebookPage:this.state.data.fbData.link,website:this.state.data.form.website.value, displayName:this.state.data.form.store.value,
                    generalInfo:this.state.data.form.info.value,colorscheme_id: "33855", phone:this.state.data.form.phoneLocal.value,phone_prefix:this.state.data.form.areaCode.value,
                    category:this.state.data.form.category.value, longDisplayName:this.state.data.form.store.value,addressName:this.state.data.form.businessAddress.value,
                    auth_location_id:this.state.data.CPData.locationId,auth_location_version:0,token:this.state.data.CPData.token,
                    data:  {data_id: 78654, timezone: 247, update_time: "2016-18-02 09:17:00", create_time: "2016-18-02 09:17:00", location_id:this.state.data.CPData.locationId, version: 0,zap_id : 12,
                    displayName: this.state.data.form.store.value, longDisplayName:this.state.data.form.store.value, email:this.state.data.form.email.value,category:this.state.data.form.category,
                    phone:this.state.data.form.phoneLocal.value,generalInfo_text_alignment:"",phone_prefix:this.state.data.form.areaCode.value, joinClubOptions: "JoinClubQuestion",
                    uipacks_font:1, app_lang:1,decimals_amount:2, decimals_amount_view_points:0, branchesRangeLimit:0}
                    },token:this.state.data.CPData.token,auth_location_id:this.state.data.CPData.locationId,auth_location_version:0};
                this._sendData("post", "https://qa.keeprz.com/api/private/location/update", locationData);

                let branchesData = {data:{addressName:this.state.data.form.businessAddress.value,positionLong:this.state.data.form.businessAddress.value.lng,positionLat:this.state.data.form.businessAddress.value.lat,
                    address: this.state.data.form.businessAddress.value, group_id:this.state.data.CPData.groupId, branch_id:49215478,auth_location_id: this.state.data.CPData.locationId, location_id: this.state.data.CPData.locationId,token: this.state.data.CPData.token},
                    auth_location_id: this.state.data.CPData.locationId, location_id: this.state.data.CPData.locationId, auth_location_version:0,token: this.state.data.CPData.token}
                this._sendData("post","https://qa.keeprz.com/api/private/branches/Update", branchesData);


                break;
            case "getImages":
                let _self = this;
                let selectedKey=_.findIndex(this.state.data.schemes, function(o) { return o.constant_id == _self.state.data.selectedScheme; });
                debugger;
                let scheme = this.state.data.schemes[selectedKey];
                let themeToUpdate = {data:scheme, auth_location_id:this.state.data.CPData.locationId, auth_location_version:0, token:this.state.data.CPData.token}
                this._sendData("post","https://qa.keeprz.com/api/private/uipacks/updateActive",themeToUpdate);
                this._switchPage();
                break;
            case "sendImages":
                let images = this.state.data.selectedImages;
                let imagesToUpdate = {data:[
                    {text:images[0].imageText, "order": 0, "targetName":images[0].image.image_id, "needToValidate":"N", "status":"published", "image_id": images[0].image.image_id},
                    {text:images[1].imageText, order: 1, targetName:images[1].image.image_id, needToValidate:"N", status:"published", image_id: images[1].image.image_id},
                    {text:images[2].imageText, order: 2, targetName:images[2].image.image_id, needToValidate:"N", status:"published", image_id: images[2].image.image_id},
                    {text:images[3].imageText, order: 3, targetName:images[3].image.image_id, needToValidate:"N", status:"published", image_id: images[3].image.image_id}],
                    token:this.state.data.CPData.token,auth_location_id:this.state.data.CPData.locationId, auth_location_version:0
                }
                this._sendData("post", "https://qa.keeprz.com/api/private/welcomeMessages/bulkupdate", imagesToUpdate);
                this._switchPage();
                break;
        }
        //this._sendData(sendMethod, sendURL, sendData);
    }
    _getColorSrc(palette){

        //get upper color (replace if white)
        let theUpperColorSrc = "pageHeaderBackgroundColorFrom";
        let upperColor = palette.pageHeaderBackgroundColorFrom;
        if(_.startsWith(upperColor,"rgba(255,255,255,")){
            theUpperColorSrc = "pageHeaderBackgroundColorTo"
        }
        //get icons color (replace if white)
        let theIconsColorSrc = "tileBackgroundColorFrom";
        let iconsColor = palette.tileBackgroundColorFrom;
        if(_.startsWith(iconsColor,"rgba(255,255,255,")){
            theIconsColorSrc = "locationColor"
        }
        return [theUpperColorSrc,theIconsColorSrc]
    }
    _toggleSelectedPalette(paletteId){

        this.state.data.paletteSelected = true;
        this.state.data.selectedScheme = paletteId;
        let index = this._getIndexByPaletteId(paletteId);
        this.state.data.phoneColors.upperColor = this.state.data.schemes[index][this.state.data.upperColorsSrc];
        this.state.data.phoneColors.iconsColor = this.state.data.schemes[index][this.state.data.iconsColorSrc];
        this.state.data.phoneColors.bgColor = this.state.data.schemes[index].backgroundImageOverlayColor;
        this.state.data.phoneColors.brightness = this.state.data.schemes[index].brightness;
        this.setState({data: this.state.data});
    }
    _getSelectedSchemeIndex(){
        var index = 0 ;
        for (let i in this.state.data.schemes){
            if(this.state.data.schemes[i].uipack_id == this.state.selectedScheme){
                index = i;
            }
        }
        return index;
    }
    _getIndexByPaletteId(paletteId){
        let index = 0;
        if(this.state.data.schemes.length == 0){
            return 0;
        }
        for(let i in this.state.data.schemes){
            console.log("i="+i+", uipack_id="+ this.state.data.schemes[i].uipack_id+", palettedId="+paletteId );

            if(typeof this.state.data.schemes[i] != "undefined" && this.state.data.schemes[i].uipack_id == paletteId){
                index = i;
            }
        }
        return index;
    }
    _sendData(sendMethod, sendURL, data) {
        switch (this.state.data.action) {
            case "register":
                return  Fetch
                    .post('https://qa.keeprz.com/api/private/public/Register', {
                        apiPrefix: "",
                        dataType: "",
                        data: data
                    })
                    .then((response)=> {
                        if (response.statusCode != "user_created") {
                            this.state.data.form.errorMessages.email = errorMessages.email.duplicate;
                            this.state.data.form.email.isValid = false;
                            this.setState({data:this.state.data});
                            jQuery(".home .btnWrap button").html("Start")
                            return;
                        } else {
                            this.state.data.CPData.userId = response.user_id;
                            this.state.data.CPData.locationId = response.location_id;
                            this.state.data.CPData.token = response.token;
                            this.state.data.groupId = response.group_id;
                            for(let i in this.state.data.defaultImages){
                                this.state.data.defaultImages[i].location_id = response.location_id
                            }

                            this.state.data.action = "getForm";
                            this._switchPage();
                        }
                    });
                break;
            case "sendForm":
                if(sendMethod == "get"){
                    let dataStr = "";
                    for(let i in data){
                        let partial = i + "=" + data[i] + "&";
                        dataStr += partial;
                    }
                    dataStr = dataStr.slice(0, -1);
                    return Fetch
                        .get(sendURL+"?"+ dataStr)
                        .then((response)=>{
                            console.log(sendURL+"?"+ dataStr);
                            console.log(response);
                            if(sendURL == getUiThemesLink){
                                if(typeof response.data != "undefined"){
                                    this.state.data.fbUiThemes = response.data;
                                    let schemes = this._getUISchemes();
                                    let colorsSrc = this._getColorSrc(schemes[0]);
                                    let upperColorsSrc = colorsSrc[0];
                                    let iconsColorSrc = colorsSrc[1];
                                    this.state.data.schemes = schemes;
                                    this.state.data.phoneColors.bgColor = schemes[0].backgroundImageOverlayColor;
                                    this.state.data.phoneColors.upperColor = schemes[0][upperColorsSrc];
                                    this.state.data.phoneColors.iconsColor = schemes[0][iconsColorSrc];
                                    this.state.data.phoneColors.brightness = schemes[0].brightness;
                                    this.state.data.upperColorsSrc = upperColorsSrc;
                                    this.state.data.iconsColorSrc = iconsColorSrc;
                                    this.state.data.action = "getThemes";
                                    this.setState({data:this.state.data});
                                    this._switchPage();
                                }
                            }else if(sendURL == getFBImagesLink){
                                if(typeof response.data != "undefined"){
                                    this.state.data.fbImages = response.data;
                                    this._setImages();
                                }
                            }
                        });
                }else if(sendMethod == "post"){
                    return Fetch
                        .post(sendURL,{
                            apiPrefix: "",
                            dataType: "",
                            data: data
                        })
                        .then((response)=>{
                            console.log(sendURL);
                            console.log(response);

                        })
                }
                break;
            case "getImages":
                return Fetch
                    .post("https://qa.keeprz.com/api/private/uipacks/updateActive",{apiPrefix:"",dataType:"",data:data})
                    .then((response)=> {
                        console.log("ui theme updated:");
                        console.log(response);
                    });
            break;
            case "sendImages":
                return Fetch
                    .post("https://qa.keeprz.com/api/private/welcomeMessages/bulkupdate",{apiPrefix:"", dataType:"",data:data})
                    .then((response) => {
                        console.log("images updated:");
                        console.log(response);
                    });
            break;
        }
    }
    _setImages(){
        let allImages = [];
        let oddImages = [];
        if(this.state.data.fbImages.length > 0){
            for(let imageIndex in this.state.data.fbImages){
                if(imageIndex%2 == 0){
                    oddImages.push(this.state.data.fbImages[imageIndex]);
                }
            }
        }
        allImages = oddImages.concat(this.state.data.defaultImages);
        let selectedImages = [{image:allImages[0], imageText:defaultImgText, selected:false},{image:allImages[1], imageText:defaultImgText, selected:false},{image:allImages[2], imageText:defaultImgText, selected:false},{image:allImages[3], imageText:defaultImgText, selected:false}];
        this.state.data.allImages = allImages;
        this.state.data.selectedImages = selectedImages;
        this.state.data.imageOnScreen = allImages[0].url;
        this.setState({data:this.state.data});
    }
    _getLocationData(obj, suggest){
        //debugger;

        if(typeof suggest == "undefined"){
            return;
        }
        if(typeof suggest == "string"){
            this.state.data.form.businessAddress.value = suggest;
        }else {
            this.state.data.form.businessAddress.value = suggest.label;
            this.state.data.form.addressDetails.placeId = suggest.placeId;
            this.state.data.form.addressDetails.lat = typeof suggest.location.lat != "undefined" ? suggest.location.lat : "";
            this.state.data.form.addressDetails.lng = typeof suggest.location.lng != "undefined" ? suggest.location.lng : "";
        }
        this._handleGeoValidation();
        this.setState({data:this.state.data});
    }
    _handleGeoValidation(){
        let isValid = true;
        if(jQuery("#geoInput").val() == ""){
            isValid = false;
        }
        this.state.data.form.businessAddress.isValid = isValid;
        this.setState({data: this.state.data});

    }

    _switchPage(){
        let animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        let vTop=0;
        switch(this.state.data.action){
            case "getForm":

                jQuery("#step1.pageWrap").addClass("show");
                jQuery("#step1.pageWrap .vAlign").css("opacity",0);
                jQuery(".pageWrap.home").animate({left:"-100%"}, "slow", function(){
                    jQuery(".pageWrap.home").removeClass("show");
                });
                jQuery("#step1.pageWrap").animate({left:"0"},"slow", function(){
                    jQuery("#step1.pageWrap .vAlign").addClass("animated fadeInRight");
                });
                this.state.data.activePages.home = false;
                this.state.data.activePages.step1 = true;

                break;
             case "getThemes":
                jQuery("#step2 .phone").css("opacity",0);
                 jQuery(".paletteWrap").each(function(){
                     jQuery(this).css("opacity",0);
                 });
                 jQuery("#step2.pageWrap").addClass("show");
                 jQuery("#step2 .vAlign").css("opacity",1);
                 jQuery(".pageWrap#step1").animate({left:"-100%"}, "slow",function(){
                     jQuery(".pageWrap#step1").removeClass("show");
                 });
                 jQuery(".pageWrap#step2").animate({left:"0"}, "slow", function(){
                    jQuery("#step2 .phone").addClass("animated fadeInRight").one(animationEnd, function(){
                        jQuery("#step2 .phone").css("opacity",1);
                        jQuery(".paletteWrap:nth-child(1)").addClass("fadeIn animated").one(animationEnd, function(){
                            jQuery(".paletteWrap:nth-child(1)").css("opacity",1).removeClass("fadeIn animated");
                            jQuery(".paletteWrap:nth-child(2)").addClass("fadeIn animated").one(animationEnd, function() {
                                jQuery(".paletteWrap:nth-child(2)").css("opacity",1).removeClass("fadeIn animated");
                                jQuery(".paletteWrap:nth-child(3)").addClass("fadeIn animated").one(animationEnd, function() {
                                   jQuery(".paletteWrap:nth-child(3)").css("opacity",1).removeClass("fadeIn animated");
                               });
                            });
                        });


                    });
                 });
                 this.state.data.activePages.step1 = false;
                 this.state.data.activePages.step2 = true;
                 break;
            case "getImages":
                let _self = this;
                var imagePageInterval = setInterval(function(){
                    if(_self.state.data.fbImages.length > 0){
                        clearInterval(imagePageInterval);
                        jQuery("#step3.pageWrap").addClass("show");
                        jQuery("#step3.pageWrap .vAlign").css("opacity",1);
                        jQuery("#step2.pageWrap").animate({left:"-100%"}, "slow",function(){
                            jQuery(".pageWrap#step2").removeClass("show");
                        });
                        jQuery(".imageWrap").each(function(){
                            jQuery(this).css("opacity",0);
                        })
                        jQuery(".pageWrap#step3").animate({left:"0"}, "slow", function(){
                            jQuery("#step3 .vAlign").addClass("animated fadeIn").one(animationEnd, function(){
                                jQuery("#step3 .phone").css('opacity', 1).addClass("fadeInRight animated").one(animationEnd, function(){
                                    jQuery(".imageWrap:nth-child(1)").css("opacity",1).addClass("zoomIn animated").one(animationEnd, function(){
                                        jQuery(".imageWrap:nth-child(1)").removeClass("zoomIn animated");
                                        jQuery(".imageWrap:nth-child(2)").css("opacity",1).addClass("zoomIn animated").one(animationEnd, function(){
                                            jQuery(".imageWrap:nth-child(2)").removeClass("zoomIn animated");
                                            jQuery(".imageWrap:nth-child(3)").css("opacity",1).addClass("alwaysVisible").addClass("zoomIn animated").one(animationEnd, function(){
                                                jQuery(".imageWrap:nth-child(3)").removeClass("zoomIn animated");
                                                jQuery(".imageWrap:nth-child(4)").css("opacity",1).addClass("zoomIn animated").one(animationEnd, function(){
                                                    jQuery(".imageWrap:nth-child(4)").removeClass("zoomIn animated");
                                                });
                                            });

                                        });
                                    });

                                })


                            });
                            jQuery(".pagination").addClass("visible");
                            jQuery(".bottomLeftImg").addClass("visible");
                        });
                    }else{
                        console.log("no images yet");
                    }
                },1000);


                break;
            case "sendImages":
                jQuery("#step4.pageWrap").addClass("show");
                jQuery("#step4.pageWrap .vAlign").css("opacity",1);
                jQuery("#step3.pageWrap").animate({left:"-100%"}, "slow",function(){
                    jQuery(".pageWrap#step3").removeClass("show");
                });
                jQuery("#step4.pageWrap").animate({left:0}, "slow",function() {
                    jQuery("#step4 .vAlign").addClass("fadeIn animated").one(animationEnd, function () {
                        jQuery("#step4 .phoneWrap:nth-child(1)").children(".device").addClass("animated fadeInRight").one(animationEnd, function () {
                            jQuery("#step4 .phoneWrap:nth-child(2)").children(".device").addClass("animated fadeInRight").one(animationEnd, function () {
                                jQuery("#step4 .phoneWrap:nth-child(3)").children(".device").addClass("animated fadeInRight").one(animationEnd, function () {
                                    jQuery("#step4 .phoneWrap:nth-child(4)").children(".device").addClass("animated fadeInRight");

                                })
                            })
                        });
                    });
                });
                break;
        }

    }

    _isFBPageValid(value){
        this._cleanAutoComplete(this);
        let _self = this;
        this._getUrl(value, 'page',function(){

            if(arguments[0].data.length > 0){
                _self.state.data.form.facebook.value = arguments[0].data[0].name;
                _self.state.data.form.facebook.isValid = true;
                _self._completeAutoComplete(arguments[0].data[0]);
            }else{
                _self.state.data.form.facebook.isValid = false;
            }
            _self.setState({data: _self.state.data});
        });
    }
    _getUrl(query,type,callback){
        if(query == ""){
            this.state.data.form.showFBOptions = false;
            this.setState({data:this.state.data});
            return;
        }
        let access = "257868791009583%7C945af5b9a3f7c8a33f64fcac44710a8a"
        let url="https://graph.facebook.com/search?"
        url+=jQuery.param({
            q:query,
            type:type,
            access_token: access,
            fields: 'id,name,picture,category,description,link,website,about,hours,phone,location',
            limit: 10
        });
        return jQuery.get(url,callback);
    }
    _handleDynamicAutoComplete(props, e){

        if(typeof e == "undefined"){
            return;
        }
        this.state.data.form.showFBOptions = true;
        this.state.data.form.chosenFromFbOptions = false;
        this.setState({data:this.state.data});
        let _self = this;
        this._getUrl(e.target.value,'page',function(){
            console.log(arguments);
            if(arguments[0].data.length > 0) {
                _self.state.data.form.options = arguments[0].data;
                _self.setState({data:_self.state.data});
            }
        });
    }
    _completeAutoComplete(option){

        if(typeof option.name == "undefined"){
            return;
        }
        this.state.data.form.facebook.value = option.name ? option.name : "";
        if(option.about){
            this.state.data.form.info.value = option.about;

        }else if(option.description){
            this.state.data.form.info.value = option.description;
        }

        this.state.data.form.website.value = option.website ? option.website : "";
        if(option.category && _.find(businessCategories, {value:option.category})) {
            this.state.data.form.category.value = option.category ? option.category : "";
        }

        if(option.phone) {
            let purePhone = option.phone.replace(/\D/g, '');
            this.state.data.form.phoneLocal.value = purePhone;
        }
        if(option.location){
            let locationStr = option.location.street ? option.location.street : "";
            locationStr += option.location.city ? ", "+option.location.city : "";
            locationStr += option.location.state ? ", "+option.location.state : "";
            locationStr += option.location.zip ? ", "+option.location.zip : "";
            this.state.data.form.businessAddress.value = locationStr;
        }
        this.state.data.form.showFBOptions = false;
        this.state.data.form.chosenFromFbOptions = option;
        this.state.data.fbData.about = option.about;
        this.state.data.fbData.category = option.category;
        this.state.data.fbData.id = option.id;
        this.state.data.fbData.link = option.link;
        this.state.data.fbData.location = option.location;
        this.state.data.fbData.name = option.name;
        this.state.data.fbData.picture = option.picture;
        this.state.data.fbData.website = option.website;

        this.setState({data: this.state.data});
    }
    _cleanAutoComplete(){
        if(!this.isMounted){
            return;
        }
        let _self = this;
      /*  Object.keys(this.state.data.Object.keys(this.state.data.form).forEach(function(key){
            let obj = _self.state.data.form[key];
            debugger;
            obj.value= "";
            obj.isValid = true;
        });*/
        let fieldsToClean = ["facebook","phoneLocal","website","category","businessAddress","info"]
        for(let key in fieldsToClean){
            this.state.data.form[fieldsToClean[key]].value = "";
            this.state.data.form[fieldsToClean[key]].isValid = true;
        }
        this.state.data.form.areaCode.value = this._getLocalCode();
        this.state.data.form.areaCode.isValid = true;
        this.state.data.form.addressDetails.value.placeId = "";
        this.state.data.form.addressDetails.value.lat = "";
        this.state.data.form.addressDetails.value.lng = "";
        this.state.data.form.addressDetails.isValid = true;

        this.setState({data:this.state.data});
    }
    _handleStaticAutoComplete(props, e){
        if(typeof e == "undefined"){
            return;
        }
        let dynamicPart = e.target.value;
        let regex = new RegExp("^" + dynamicPart+ ".*", "g");
        this.props.areaCodeOptions = _filter(props.options, 'value'.match(regex));
        this.setState({data: this.state.data});
    }

    _showAutoComplete(){
       // debugger;
        if(this.state.data.form.showFBOptions){
            return(
                <AutoComplete options={this.state.data.form.options} onClick={this._completeAutoComplete.bind(this)}/>
            )
        }
    }
    _onWrapperClick(e){
        if(e.target.name == "facebook" || e.target.className=="autoCompleteList" || this.state.data.form.chosenFromFbOptions || e.target.tagName == "BUTTON"){
            return;
        }
        if(jQuery("input[name='facebook']").val() == ""){
            //this._cleanAutoComplete();
            return;
        }
        this.state.data.form.showFBOptions = false;
        this.setState({data:this.state.data});
        let fbValid = this._isFBPageValid(jQuery("input[name='facebook']").val());

    }

    _centerContent(){
        let vTop = 0;

            vTop = (jQuery(window).height() - parseInt(jQuery(".home .vAlign").css("height"))) / 2;
            if (vTop <20) {
                vTop = 20;
            }
            jQuery(".home .vAlign").css("top", vTop + "px");

            let vLeft = (jQuery(window).width() - parseInt(jQuery(".home .vAlign").css("width"))) / 2;
            jQuery(".home .vAlign").css("left", vLeft + "px");
            jQuery(".home .vAlign").addClass("animated fadeInUp");

       for(let i = 1; i < 5; i ++ ){
           //debugger;
           vTop = (jQuery(window).height() - parseInt(jQuery("#step"+i+" .vAlign").css("height"))) / 2;
           if (vTop <20) {
               vTop = 20;
           }
           //console.log("step" + i+", vAlign height:" + parseInt(jQuery("#step"+i+" .vAlign").css("height"))+ ", top: "+vTop);
           jQuery("#step"+i+" .vAlign").css("top", vTop + "px");
        }
    }

    _toggleSlider(event){
        let elemObj = jQuery(event.target);
        console.log(elemObj);
        if(elemObj.hasClass("blanket") || elemObj.hasClass("thumb") || elemObj.hasClass("slick-next") || elemObj.hasClass("slick-prev")){
            return;
        }else{
            jQuery(".slider").removeClass("show");
        }
    }
    _onClickThumb(obj,item, event){
     //    debugger;
        jQuery(".thumbWrap").removeClass("selectedThumb");
        jQuery(event.target).parents(".thumbWrap").addClass("selectedThumb");
        let selectedText = jQuery(".imageWrap.selected").find("input.imageDescription").val();

        let images = this.state.data.allImages;
        let theEnteringImageObj = {};
        for (let i in images){
            if(images[i].image_id == item.id){
                theEnteringImageObj = {image: images[i], imageText: selectedText, selected: true};
            }
        }
        for(let i in this.state.data.selectedImages){
            if(this.state.data.selectedImages[i].selected == true){
                this.state.data.selectedImages[i] = theEnteringImageObj;
            }
        }
        this.state.data.imageOnScreen = theEnteringImageObj.image.url;

        console.log(event.target);
        let thumbIndex = jQuery(event.target).attr("id").split("_")[1];
        this.state.data.thumbGoTo = thumbIndex;
        console.log("thumbIndex:");
        console.log(thumbIndex);
        this.setState({data:this.state.data});
        return;
    }
    _selectImage(index,imageId,event){

        if(this.state.data.selectedImages[index].selected == true){
            if(jQuery(".slider").hasClass("show")){
                jQuery(".slider").removeClass("show");
            }else{
                this._showSlider();
            }
            return;
        }
        /*remove selected from all images*/
        for(let i in this.state.data.selectedImages){
            this.state.data.selectedImages[i].selected = false;
        }
        console.log("previously selected thumb: ");
        console.log(jQuery(".thumbWrap.selectedThumb"));
        if(!jQuery(".thumbWrap.selectedThumb").hasClass("thumbId_"+imageId)) {
            jQuery(".thumbWrap").removeClass("selectedThumb");
        }
        /*add selected to the current image*/

        this.state.data.selectedImages[index].selected = true;
        this.state.data.imageOnScreen = this.state.data.selectedImages[index].image.url;

        this.state.data.selectedFromGalleryImageId = imageId;
        this.setState({data:this.state.data});
        this._showSlider();

    }
    _showSlider(){

        jQuery(".slider").addClass("show");
        /*check if slider is in view, if not scroll down to it*/
        let visibleSliderHeight = 127;
        let offset = jQuery(".slider").offset().top + visibleSliderHeight - jQuery(window).scrollTop();
        if(offset > window.innerHeight){
            jQuery("html,body").animate({scrollTop:offset},1000,function(){
                jQuery(".pageWrap").css("min-height",jQuery(document).height());
            });
        }
    }
    _toggleClass(options){
        // debugger;
        if(options.action == "add"){
            jQuery("."+options.className).addClass(options.toggleClass);
        }else{
            jQuery("."+options.className).removeClass(options.toggleClass);
        }
    }
    _onTextInputBlur(index, classParams, event){
        this._toggleClass(classParams);
        this.state.data.selectedImages[index].imageText = event.target.value;
        this.setState({data:this.state.data});
        console.log(index);
        console.log(classParams);
        console.log(event);
    }
    componentDidMount(){
        this.state.data.bgInterval = setInterval(this._changeBg, 8000);
        //jQuery("#currentScreen").css("background-color","#08b9e4");
        let _self = this;
        setTimeout(function(){
            _self._centerContent();

          //  jQuery(".home .vAlign").animate({top: vTop, opacity: 1}, "slow");
        },200);
    }
    _switchPageDev(step){
        if(step == "step1") {
            this.state.data.action = "getForm";
            jQuery("#step1").css("left","100%");
            jQuery("#step1").css("display","block");
        }
        if(step == "step2"){
            this.state.data.action = "getThemes";
            jQuery("#step2").css("left","100%");
            jQuery("#step2").css("display","block");
            jQuery(".paletteWrap").css("opacity",0);
           // jQuery(".phone").css("opacity",0);
        }
        if(step == "step3"){
            this.state.data.action = "getImages";
            jQuery("#step3").css("left","100%");
            jQuery("#step3").css("display","block");
        }
        this.setState({data: this.state.data});
        this._switchPage();
    }
    render(){
        return(
            <div>
                <div style={{position:"fixed", top: "20px", left: "2px",backgroundColor:"pink", width:"100px", height:"50px",zIndex:"9"}}>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step1")}>Go to Step 1</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step2")}>Go to Step 2</div>
                    <div style={{borderBottom: "solid 1px white", cursor:"pointer"}} onClick={this._switchPageDev.bind(this, "step3")}>Go to Step 3</div>
                </div>
                <Home
                    backgrounds={this.state.data.HPBackgrounds}
                    handleValidation = {this._handleRegisterValidation}
                    form = {this.state.data.form}
                    setData = {this._setData}
                    handleBtnClick = {this._handleBtnClick}
                    show = {this.state.data.activePages.home}
                />
                <Step1
                    handleValidation = {this._handleFieldsValidation}
                    form = {this.state.data.form}
                    setData = {this._setData}
                    handleBtnClick = {this._handleBtnClick}
                    areaCodeOptions = {areaCodeOptions}
                    handleGeoValidation = {this._handleGeoValidation}
                    getLocationData = {this._getLocationData}
                    businessCategories = {businessCategories}
                    handleDynamicAutoComplete = {this._handleDynamicAutoComplete.bind(this)}
                    handleStaticAutoComplete = {this._handleStaticAutoComplete.bind(this)}
                    showAutoComplete = {this._showAutoComplete.bind(this)}
                    onWrapperClick = {this._onWrapperClick.bind(this)}
                    show = {this.state.data.activePages.step1}
                />
                <Step2
                    show = {this.state.data.activePages.step2}
                    schemes = {this.state.data.schemes}
                    handleBtnClick = {this._handleBtnClick}
                    phoneColors = {this.state.data.phoneColors}
                    iconsColorSrc = {this.state.data.iconsColorSrc}
                    upperColorsSrc = {this.state.data.upperColorsSrc}
                    selectedScheme = {this.state.data.selectedScheme}
                    onPaletteClick = {this._toggleSelectedPalette.bind(this)}
                    getIndexByPaletteId = {this._getIndexByPaletteId.bind(this)}
                    paletteSelected = {this.state.data.paletteSelected}
                />
                <Step3
                    phoneColors = {this.state.data.phoneColors}
                    onPageClick = {this._toggleSlider}
                    imageOnScreen = {this.state.data.imageOnScreen}
                    selectedImages = {this.state.data.selectedImages}
                    selectedFromGalleryImageId = {this.state.data.selectedFromGalleryImageId}
                    allImages = {this.state.data.allImages}
                    thumbGoTo = {this.state.data.thumbGoTo}
                    onClickThumb = {this._onClickThumb.bind(this)}
                    selectImage = {this._selectImage.bind(this)}
                    toggleClass = {this._toggleClass}
                    onTextInputBlur = {this._onTextInputBlur}
                    handleBtnClick = {this._handleBtnClick}
                />
                <Step4  phoneColors = {this.state.data.phoneColors}/>
            </div>
        )
    }
}
export default Father;