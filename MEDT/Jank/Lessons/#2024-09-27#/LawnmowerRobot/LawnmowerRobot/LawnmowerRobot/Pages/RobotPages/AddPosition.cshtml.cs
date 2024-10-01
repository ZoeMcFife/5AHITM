using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using LawnmowerRobot.Data;
using LawnmowerRobot.Model;
using Microsoft.EntityFrameworkCore;

namespace LawnmowerRobot.Pages.RobotPages
{
    public class AddPositionModel : PageModel
    {
        private readonly LawnmowerRobot.Data.LawnmowerRobotContext _context;

        public AddPositionModel(LawnmowerRobot.Data.LawnmowerRobotContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Position Position { get; set; } = new Position();

        public List<SelectListItem> RobotsSelectList { get; set; } = new List<SelectListItem>();

        public async Task<IActionResult> OnGetAsync()
        {
            // Fetch all robots from the database and convert them into a select list
            RobotsSelectList = await _context.Robot
                .Select(r => new SelectListItem
                {
                    Value = r.Id.ToString(),
                    Text = r.Name
                })
                .ToListAsync();

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Find the robot by the selected ID
            var robot = await _context.Robot.FindAsync(Position.Robot.Id);

            if (robot == null)
            {
                ModelState.AddModelError("Position.Robot", "Robot not found.");
                return Page();
            }

            Position.Robot = robot;
            _context.Positions.Add(Position);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}

