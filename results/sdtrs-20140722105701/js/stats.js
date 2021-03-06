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
		ok: "10",
		ko: "0"
	},
	minResponseTime : {
		total: "140",
		ok: "140",
		ko: "-"
	},
	maxResponseTime : {
		total: "250",
		ok: "250",
		ko: "-"
	},
	meanResponseTime : {
		total: "173",
		ok: "173",
		ko: "-"
	},
	standardDeviation : {
		total: "32",
		ok: "32",
		ko: "-"
	},
	percentiles1 : {
		total: "250",
		ok: "250",
		ko: "-"
	},
	percentiles2 : {
		total: "250",
		ok: "250",
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
				"request-2-93baff648d9a0c13a48ee1d38e7b220f": {
		type: "REQUEST",
		name: "request_2",
path: "request_2",
pathFormatted: "request-2-93baff648d9a0c13a48ee1d38e7b220f",
stats: {
	numberOfRequests : {
		total: "1",
		ok: "0",
		ko: "1"
	},
	minResponseTime : {
		total: "60",
		ok: "-",
		ko: "60"
	},
	maxResponseTime : {
		total: "60",
		ok: "-",
		ko: "60"
	},
	meanResponseTime : {
		total: "60",
		ok: "-",
		ko: "60"
	},
	standardDeviation : {
		total: "0",
		ok: "-",
		ko: "0"
	},
	percentiles1 : {
		total: "60",
		ok: "-",
		ko: "60"
	},
	percentiles2 : {
		total: "60",
		ok: "-",
		ko: "60"
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
		total: "11",
		ok: "10",
		ko: "1"
	},
	minResponseTime : {
		total: "60",
		ok: "140",
		ko: "60"
	},
	maxResponseTime : {
		total: "250",
		ok: "250",
		ko: "60"
	},
	meanResponseTime : {
		total: "163",
		ok: "173",
		ko: "60"
	},
	standardDeviation : {
		total: "43",
		ok: "32",
		ko: "0"
	},
	percentiles1 : {
		total: "200",
		ok: "250",
		ko: "60"
	},
	percentiles2 : {
		total: "250",
		ok: "250",
		ko: "60"
	},
	group1 : {
		name: "t < 800 ms",
		count: 10,
		percentage: 90
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
		percentage: 9
	},
	meanNumberOfRequestsPerSecond: {
		total: "1",
		ok: "1",
		ko: "0"
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
