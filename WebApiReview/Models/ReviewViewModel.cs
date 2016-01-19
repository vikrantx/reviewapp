using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiReview.Models
{
    public class ReviewViewModel
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public int ScopeId { get; set; }
        public string Scope { get; set; }
        public string ReviewDate { get; set; }
        public int ReviewType { get; set; }
        public string FileName { get; set; }
        public string FileVersion { get; set; }
        public string AssignedTo { get; set; }
        public string ReviewedBy { get; set; }
        public string ReviewerComment { get; set; }
        public string OwnerResponse { get; set; }
        public string Severity { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }

    }
}