using Core.Interfaces;
using Core.Interfaces.Repositories;
using NepFlex.Core.Entities.ResourceModels;
using NepFlex.Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NepFlex.Core.Services
{
    public class SendEmailSevice:ISendEmailService
    {

        private IUnitOfWork _unitOfWork { get; set; }
        public SendEmailSevice(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public string SendEmail(SendEmailRequest email)
        {
            return _unitOfWork.SendEmailRepository.SendEmail(email);
        }
    }
}
