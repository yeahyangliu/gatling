package basic

object Headers {
	 def cookies = "loginToken=NTNlMmYzMzgtZGJlMC0xMWUzLWI2MTgtMWE1MTQ5MzJhYzAxXzc3MzIzNDU0OTI4NjE1NDZfMDowOjA6MDowOjA6MDoxXzk2MTYzNTAxMjhkZWM4NWU4ODA5ZmRhM2U5YTc2OGRlNjkxNzczOTI=; " +
    "company=c039a411-dbe0-11e3-b618-1a514932ac01; " +
    "role=201e0001-0001-11e3-b618-1a514932ac01"

  val headers_no_login = Map(
    "Keep-Alive" -> "115",
    "Content-Type" -> "application/x-www-form-urlencoded")

  val headers_login = Map(
    "Accept" -> "application/json, text/javascript, */*; q=0.01",
    "Keep-Alive" -> "115",
    "X-Requested-With" -> "XMLHttpRequest",
    "Cookie" -> cookies)
}