//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReviewDataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class Scope
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Scope()
        {
            this.Reviews = new HashSet<Review>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public int Project { get; set; }
        public int Creator { get; set; }
        public System.DateTime CreatedDateTime { get; set; }
    
        public virtual Project Project1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Review> Reviews { get; set; }
        public virtual User User { get; set; }
    }
}
