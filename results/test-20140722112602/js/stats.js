var stats = {
	type: "GROUP",
contents: {
		
				"request-2-93baff648d9a0c13a48ee1d38e7b220f": {
		type: "REQUEST",
		name: "request_2",
path: "request_2",
pathFormatted: "request-2-93baff648d9a0c13a48ee1d38e7b220f",
stats: {
	numberOfRequests : {
		total: "100",
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "230",
		ok: "230",
		ko: "-"
	},
	maxResponseTime : {
		total: "450",
		ok: "450",
		ko: "-"
	},
	meanResponseTime : {
		total: "268",
		ok: "268",
		ko: "-"
	},
	standardDeviation : {
		total: "42",
		ok: "42",
		ko: "-"
	},
	percentiles1 : {
		total: "380",
		ok: "380",
		ko: "-"
	},
	percentiles2 : {
		total: "450",
		ok: "450",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 100,
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
		total: "10",
		ok: "10",
		ko: "-"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "100",
		ok: "100",
		ko: "0"
	},
	minResponseTime : {
		total: "230",
		ok: "230",
		ko: "-"
	},
	maxResponseTime : {
		total: "450",
		ok: "450",
		ko: "-"
	},
	meanResponseTime : {
		total: "268",
		ok: "268",
		ko: "-"
	},
	standardDeviation : {
		total: "42",
		ok: "42",
		ko: "-"
	},
	percentiles1 : {
		total: "380",
		ok: "380",
		ko: "-"
	},
	percentiles2 : {
		total: "450",
		ok: "450",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 100,
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
		total: "10",
		ok: "10",
		ko: "-"
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
