package basic

import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import Headers._
import akka.util.duration._
import bootstrap._

object SearchScenario {
	val scn = scenario("Scenario Login")
  		.exec(http("request_2")
		    .get("/api/invoices?invoiceStatus=preparing&invoiceType=vat&page=1&searchItem=ref_doc_no")
		    .headers(Headers.headers_login)
		    .check(status.is(200)))
		.pause(0 milliseconds, 100 milliseconds)
}