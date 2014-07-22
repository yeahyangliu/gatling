var stats = {
	type: "GROUP",
contents: {
		
				"request-1-46da482b5ba7614b7124accf72d8b1ce": {
		type: "REQUEST",
		name: "request_1",
path: "request_1",
pathFormatted: "request-1-46da482b5ba7614b7124accf72d8b1ce",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "0",
		ko: "10"
	},
	minResponseTime : {
		total: "50",
		ok: "-",
		ko: "50"
	},
	maxResponseTime : {
		total: "5460",
		ok: "-",
		ko: "5460"
	},
	meanResponseTime : {
		total: "2317",
		ok: "-",
		ko: "2317"
	},
	standardDeviation : {
		total: "1929",
		ok: "-",
		ko: "1929"
	},
	percentiles1 : {
		total: "5460",
		ok: "-",
		ko: "5460"
	},
	percentiles2 : {
		total: "5460",
		ok: "-",
		ko: "5460"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 10,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "1",
		ok: "-",
		ko: "1"
	}
}


	}
		,		
				"request-2-93baff648d9a0c13a48ee1d38e7b220f": {
		type: "REQUEST",
		name: "request_2",
path: "request_2",
pathFormatted: "request-2-93baff648d9a0c13a48ee1d38e7b220f",
stats: {
	numberOfRequests : {
		total: "10",
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "20",
		ok: "20",
		ko: "-"
	},
	maxResponseTime : {
		total: "80",
		ok: "80",
		ko: "-"
	},
	meanResponseTime : {
		total: "40",
		ok: "40",
		ko: "-"
	},
	standardDeviation : {
		total: "23",
		ok: "23",
		ko: "-"
	},
	percentiles1 : {
		total: "80",
		ok: "80",
		ko: "-"
	},
	percentiles2 : {
		total: "80",
		ok: "80",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 100
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "1",
		ok: "1",
		ko: "-"
	}
}


	}
		,		
				"request-3-d09735bb02d6e5012b92b4f819ff64cc": {
		type: "REQUEST",
		name: "request_3",
path: "request_3",
pathFormatted: "request-3-d09735bb02d6e5012b92b4f819ff64cc",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "0",
		ko: "1"
	},
	minResponseTime : {
		total: "70",
		ok: "-",
		ko: "70"
	},
	maxResponseTime : {
		total: "70",
		ok: "-",
		ko: "70"
	},
	meanResponseTime : {
		total: "70",
		ok: "-",
		ko: "70"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "70",
		ok: "-",
		ko: "70"
	},
	percentiles2 : {
		total: "70",
		ok: "-",
		ko: "70"
	},
	group1 : {
		name: "t < 800 ms",
		count: 0,
		percentage: 0
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 1,
		percentage: 100
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "-",
		ko: "0"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "21",
		ok: "10",
		ko: "11"
	},
	minResponseTime : {
		total: "20",
		ok: "20",
		ko: "50"
	},
	maxResponseTime : {
		total: "5460",
		ok: "80",
		ko: "5460"
	},
	meanResponseTime : {
		total: "1126",
		ok: "40",
		ko: "2113"
	},
	standardDeviation : {
		total: "1750",
		ok: "23",
		ko: "1949"
	},
	percentiles1 : {
		total: "4360",
		ok: "80",
		ko: "4360"
	},
	percentiles2 : {
		total: "5460",
		ok: "80",
		ko: "5460"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 47
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 0,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 11,
		percentage: 52
	},
	meanNumberOfRequestsPerSecond: {
		total: "2",
		ok: "1",
		ko: "1"
	}
}



}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
