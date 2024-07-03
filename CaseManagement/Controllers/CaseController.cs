using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using CaseManagement.Models;

namespace CaseManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CasesController : ControllerBase
    {
        private readonly CaseContext _context;

        public CasesController(CaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Case> Get() => _context.Cases.ToList();

        [HttpPost]
        public IActionResult Create(Case newCase)
        {
            _context.Cases.Add(newCase);
            _context.SaveChanges();
            return CreatedAtAction(nameof(Get), new { id = newCase.Id }, newCase);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Case updatedCase)
        {
            var existingCase = _context.Cases.Find(id);
            if (existingCase == null) return NotFound();

            existingCase.Name = updatedCase.Name;
            existingCase.Length = updatedCase.Length;
            existingCase.Width = updatedCase.Width;
            existingCase.Height = updatedCase.Height;
            existingCase.Weight = updatedCase.Weight;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var caseToDelete = _context.Cases.Find(id);
            if (caseToDelete == null) return NotFound();

            _context.Cases.Remove(caseToDelete);
            _context.SaveChanges();
            return NoContent();
        }
    }
}