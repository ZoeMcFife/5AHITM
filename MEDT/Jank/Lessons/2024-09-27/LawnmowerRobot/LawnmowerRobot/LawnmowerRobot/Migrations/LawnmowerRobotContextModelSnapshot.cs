﻿// <auto-generated />
using System;
using LawnmowerRobot.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LawnmowerRobot.Migrations
{
    [DbContext(typeof(LawnmowerRobotContext))]
    partial class LawnmowerRobotContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LawnmowerRobot.Model.Position", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Battery")
                        .HasColumnType("int");

                    b.Property<string>("Event")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Latitude")
                        .HasColumnType("bigint");

                    b.Property<long>("Longitude")
                        .HasColumnType("bigint");

                    b.Property<int?>("RobotId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RobotId");

                    b.ToTable("Positions");
                });

            modelBuilder.Entity("LawnmowerRobot.Model.Robot", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("LastUse")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Robot");
                });

            modelBuilder.Entity("LawnmowerRobot.Model.Position", b =>
                {
                    b.HasOne("LawnmowerRobot.Model.Robot", "Robot")
                        .WithMany("Position")
                        .HasForeignKey("RobotId");

                    b.Navigation("Robot");
                });

            modelBuilder.Entity("LawnmowerRobot.Model.Robot", b =>
                {
                    b.Navigation("Position");
                });
#pragma warning restore 612, 618
        }
    }
}