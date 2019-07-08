import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher:'4201738803816157',
    format:'json',
    v:'2',
    latlong:1,
    radius:10,
    q: 'javascript',
}

const data = {
    version: 2,
    query:'java',
    location:'austin, tx',
    paginationPayload:'',
    radius:25,
    dupefilter:true,
    highlight:true,
    totalResults:123,
    start:1,
    end:10,
    pageNumber:0,
    results:[
        {
            jobtitle:'Junior Java Developer',
            company:'Pragmation, Inc',
            city:'Austin',
            state:'TX',
            country:'US',
            formattedLocation:'Austin, TX',
            source:'Indeed',
            date:'Mon, 20 Mar 2017 17:27:51 GMT',
            snippet:'Expert level knowledge of <b>Java</b> and related technologies. As a <b>Java</b> Developer, you will be performing the following responsibilities:...',
            onmousedown:"indeed_clk(this,'433');",
            latitude:37.000000, //36.99999979649789 =>36.97990337732907 36.979903
            longitude:-122.000000, //-121.99999993667006 => -122.00242096558212 -122.002421
            jobKey:'cd30252e2fa634b9',
            sponsored:false,
            indeedApply:true,
            formatedLocationFull:'Ausin, TX'
        },
        {
            jobtitle:'Junior Java Developer',
            company:'ABCD, Inc',
            city:'Austin',
            state:'TX',
            country:'US',
            formattedLocation:'Austin, TX',
            source:'Indeed',
            date:'Mon, 20 Mar 2017 17:27:51 GMT',
            snippet:'Expert level knowledge of <b>Java</b> and related technologies. As a <b>Java</b> Developer, you will be performing the following responsibilities:...',
            onmousedown:"indeed_clk(this,'433');",
            latitude:36.979903, //36.99999979649789 =>36.97990337732907 36.979903
            longitude:-122.002421, //-121.99999993667006 => -122.00242096558212 -122.002421
            jobKey:'cd30252e2fa634b9',
            sponsored:false,
            indeedApply:true,
            formatedLocationFull:'Ausin, TX'
        },
        {
            jobtitle:'Senior Java Developer',
            company:'Senior Only, Inc',
            city:'Austin',
            state:'TX',
            country:'US',
            formattedLocation:'Austin, TX',
            source:'Indeed',
            date:'Mon, 20 Mar 2017 17:27:51 GMT',
            snippet:'Expert level knowledge of <b>Java</b> and related technologies. As a <b>Java</b> Developer, you will be performing the following responsibilities:...',
            onmousedown:"indeed_clk(this,'433');",
            latitude:36.984005, //36.99999979649789 =>36.97990337732907 36.979903
            longitude:-121.978743, //-121.99999993667006 => -122.00242096558212 -122.002421
            jobKey:'cd30252e2fa634b9',
            sponsored:false,
            indeedApply:true,
            formatedLocationFull:'Ausin, TX'
        },
        {
            jobtitle:'Senior Java Developer',
            company:'Hopefull Company, Inc',
            city:'Austin',
            state:'TX',
            country:'US',
            formattedLocation:'Austin, TX',
            source:'Indeed',
            date:'Mon, 20 Mar 2017 17:27:51 GMT',
            snippet:'Expert level knowledge of <b>Java</b> and related technologies. As a <b>Java</b> Developer, you will be performing the following responsibilities:...',
            onmousedown:"indeed_clk(this,'433');",
            latitude:37.006208, //36.99999979649789 =>36.97990337732907 36.979903
            longitude:-121.989090, //-121.99999993667006 => -122.00242096558212 -122.002421
            jobKey:'cd30252e2fa634b9',
            sponsored:false,
            indeedApply:true,
            formatedLocationFull:'Ausin, TX'
        }
    ]
}

const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS,l:zip});
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region,callback) => async (dispath) => {
    try {
        const region_data = region;
        let zip = '95062';
        // const url = buildJobsUrl(zip);
        // let {data} = await axios.get(url);
        // console.log(data);
        dispath({type:FETCH_JOBS,payload:data});
        callback();
    } catch (e) {
        console.error(e);
    }
};