using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Script.Serialization;
using System.Web.Http;
using ReviewDataAccess;
using WebApiReview.Models;
using AutoMapper;

namespace WebApiReview.Controllers
{
    public class ReviewController : ApiController
    {
        Entities db = new Entities();

        public string Get()
        {
            
            var rall = db.Reviews.AsEnumerable()
                        .Select(x => new ReviewViewModel{
                                            Id = x.Id,
                                            ReviewDate = x.ReviewDate.ToString("dd/MM/yyyy"),
                                            ScopeId = x.Scope,
                                            Scope = x.Scope1.Name,
                                            ProjectName = x.Scope1.Project1.Name,
                                            AssignedTo = x.User.FirstName +' '+x.User.LastName,
                                            ReviewedBy = x.User1.FirstName +' '+x.User1.LastName,
                                            Severity = x.Severity.Type,
                                            Category = x.Category.Name,
                                            Status = x.Status.Type
                                        }).ToList();

             return new JavaScriptSerializer().Serialize(rall);
        }

        public string Get(int id)
        { 
            Review review = db.Reviews.Find(id);             
            var selreview = new ReviewViewModel{
                                            Id = review.Id, ReviewDate = review.ReviewDate.ToString("dd/MM/yyyy"),
                                            Scope = review.Scope1.Name,
                                            AssignedTo = review.User.FirstName +" "+ review.User.LastName,
                                            ReviewedBy = review.User1.FirstName +" "+ review.User1.LastName,
                                            Severity = review.Severity.Type,
                                            Category = review.Category.Name,
                                            Status = review.Status.Type
                                          };
            return new JavaScriptSerializer().Serialize(selreview);
        }

        public void Post(List<string> val)
        {
            //add to db 
        }
    }
}
