/**
 * ================Basic==========
 * ==================================
 * 1.do not show the link to them who should not see it 
 * 1.0 only show to the person/types of user who should see it 
 * 2. Do not allow to visit the link by typing on the url
 * use AdminRoute that will check wether the user is admin or not
 * if not admin then redirect to any other page . you could logout user and send them to the 
 * login as well
 * 
 * 
 * ===========================
 *          To SEND DATA 
 * ===========================
 * 1.verify jwt token (send authorization token in the header to the server)
 * if possible use axios to send jwt token by intercepting the request
 * 2.if it is an admin activity . make sure only admin user is posting
 *  data by using verifyAdmin
 */