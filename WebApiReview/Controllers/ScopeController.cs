using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using ReviewDataAccess;
using WebApiReview.Models;

namespace WebApiReview.Controllers
{
    public class ScopeController : ApiController
    {
        private Entities db = new Entities();
        public string GetProjects()
        {
            var sp = db.Scopes.AsEnumerable()
                     .Select(s => new { Id = s.Id, PId = s.Project, Name = s.Name});
            return new JavaScriptSerializer().Serialize(sp);
        }
    }
}
