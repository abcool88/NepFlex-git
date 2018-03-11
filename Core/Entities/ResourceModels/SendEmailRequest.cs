using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Entities.ResourceModels
{
    public class SendEmailRequest
    {
        public string SenderEmail { get; set; }
        public string SentToEmail { get; set; }
        public string SubjectEmail { get; set; }
        public string EmailText { get; set; }
    }
}
