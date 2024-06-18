using Microsoft.EntityFrameworkCore;
using Notes_API.Models.Entities;

namespace Notes_API.Data
{
    public class NotesDbContext : DbContext
    {
        public NotesDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Note> Notes { get; set; }

    }
}