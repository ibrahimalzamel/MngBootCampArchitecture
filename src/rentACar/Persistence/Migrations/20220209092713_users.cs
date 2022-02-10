using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperationClaim",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperationClaim", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Invoices",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "RentalEndDate", "RentalStratDate" },
                values: new object[] { new DateTime(2022, 2, 9, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 11, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 9, 0, 0, 0, 0, DateTimeKind.Local) });

            migrationBuilder.InsertData(
                table: "OperationClaim",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Admin" });

            migrationBuilder.UpdateData(
                table: "Rentals",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "RentEndDate", "RentStartDate", "ReturnDate" },
                values: new object[] { new DateTime(2022, 2, 9, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 9, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 9, 0, 0, 0, 0, DateTimeKind.Local) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperationClaim");

            migrationBuilder.UpdateData(
                table: "Invoices",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedDate", "RentalEndDate", "RentalStratDate" },
                values: new object[] { new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 10, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local) });

            migrationBuilder.UpdateData(
                table: "Rentals",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "RentEndDate", "RentStartDate", "ReturnDate" },
                values: new object[] { new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local), new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local) });
        }
    }
}
