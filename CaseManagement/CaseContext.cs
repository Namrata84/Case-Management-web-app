using Microsoft.EntityFrameworkCore;
using CaseManagement.Models;

namespace CaseManagement
{
    public class CaseContext : DbContext
    {
        public DbSet<Case> Cases { get; set; }

        public CaseContext(DbContextOptions<CaseContext> options) : base(options) { }
    }
}